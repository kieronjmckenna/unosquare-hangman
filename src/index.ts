import { readFileSync } from 'node:fs'
import { ApolloServer } from '@apollo/server'
import { Resolvers } from './generated/resolvers-types'
import { createGame } from './functions/mutations/create-game'
import { guess } from './functions/mutations/guess'
import { game } from './functions/queries/game'
import { startStandaloneServer } from '@apollo/server/standalone';
 
const typeDefs = readFileSync('./schema.graphql', 'utf8')
 
const resolvers: Resolvers = {
  Query: {
    game: (_, args) => game(args)
  },
  Mutation: {
    createGame: {
      resolve: createGame,
    },
    guess: (_, args) => guess(args)
  }
}
 
const server = new ApolloServer({ typeDefs, resolvers })
 
startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({
  url
}) => {
  console.log(`🚀  Server ready at: ${url}`);
});


