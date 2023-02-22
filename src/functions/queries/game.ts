import { prisma } from "../../clients/prisma"
import { Query, QueryGameArgs } from "../../generated/resolvers-types"
import { createWordGuessedSoFar } from '../helpers/create-word-guessed-so-far'

export const game = async ({id}: QueryGameArgs): Promise<Query['game']> => {
  const game = await prisma.game.findUnique({
    where: {
      id
    },
    include: {
      guesses: true,
    }
  })

  if (!game) {
    throw new Error('Game not found')
  }

  const { guesses, word } = game

  return {
    id,
    word: createWordGuessedSoFar(word, guesses.map((g) => g.letter)),
    guesses: guesses.map((g) => g.letter)
  }
}