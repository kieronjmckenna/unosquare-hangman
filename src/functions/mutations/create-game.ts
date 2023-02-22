import { prisma } from '../../clients/prisma'
import randomWords from 'random-words'
import { Mutation } from '../../generated/resolvers-types'

export const createGame = async (): Promise<Mutation['createGame']> => {
  const word = randomWords(1)[0]

  const {
    id
  } = await prisma.game.create({
    data: {
      word
    },
  })

  return id
}
