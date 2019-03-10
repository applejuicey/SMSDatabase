const { prisma } = require('../prisma/generated/prisma-client');
const { GraphQLServer } = require('graphql-yoga');
const { resolvers } = require('./resolvers/index');
const { permissions } = require('./middlewares/permissions/index');
const { log } = require('./middlewares/log');

const server = new GraphQLServer({
  typeDefs: './src/schema/schema.graphql',
  resolvers,
  middlewares: [log, permissions],
  context: request => {
    return {
      ...request,
      prisma
    };
  },
});

server.start(({ port }) => console.log(`服务器当前运行于【http://localhost:${port}】`));