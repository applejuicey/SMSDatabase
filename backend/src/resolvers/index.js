const { Query } = require('./query');
const { Mutation } = require('./mutation');
const { Compound } = require('./compound');

const resolvers = {
  Query,
  Mutation,
  Compound
};

module.exports = {
  resolvers
};