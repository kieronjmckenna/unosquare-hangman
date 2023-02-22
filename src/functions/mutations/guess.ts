import { prisma } from "../../clients/prisma"
import { Mutation, MutationGuessArgs } from "../../generated/resolvers-types"
import { createWordGuessedSoFar } from '../helpers/create-word-guessed-so-far'

export const guess = async (_: any, {gameId, guess}: MutationGuessArgs): Promise<Mutation['guess']> => {
  const game = await prisma.game.findUnique({
    where: {
      id: gameId
    },
    include: {
      guesses: true,
    }
  })

  if (!game) {
    throw new Error('Game not found')
  }

  const { guesses, word } = game

  guesses.forEach((g) => {
    if (g.letter === guess) {
      throw new Error('You already guessed that')
    }
  })


  await prisma.guess.create({
    data: {
      letter: guess,
      hangmanGameId: gameId,
    }
  })
  
  const wordGuessedSoFar = createWordGuessedSoFar(word, [...guesses.map((g) => g.letter), guess])

  return {
    word: wordGuessedSoFar,
    guessCorrect: word.includes(guess),
  }
}