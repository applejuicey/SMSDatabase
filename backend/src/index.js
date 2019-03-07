const { prisma } = require('../prisma/generated/prisma-client');
const { GraphQLServer } = require('graphql-yoga');
const { resolvers } = require('./resolvers/index');
const { permissions } = require('./permissions/index');

const server = new GraphQLServer({
  typeDefs: './src/schema/schema.graphql',
  resolvers,
  middlewares: [permissions],
  context: request => {
    return {
      ...request,
      prisma
    };
  },
});

server.start(() => console.log('服务器当前运行于【http://localhost:4000】'));