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
    name: "PositiveMSData",
    embedded: false
  },
  {
    name: "NegativeMSData",
    embedded: false
  },
  {
    name: "SaponinsSource",
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
  endpoint: `http://localhost:4466`
});
exports.prisma = new exports.Prisma();
