"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Compound",
    embedded: false
  },
  {
    name: "MSData",
    embedded: false
  },
  {
    name: "LiteratureSource",
    embedded: false
  },
  {
    name: "RoleType",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://106.13.97.232:4466/smsd-api/dev`,
  secret: `anti-mage`
});
exports.prisma = new exports.Prisma();
