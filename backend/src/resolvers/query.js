const { verifyAndDecodeToken } = require('../utils/token-processor');

const Query = {
  me: async (parent, args, context, info) => {
    const currentUserId = verifyAndDecodeToken(context).id;
    return await context.prisma.user({ id: currentUserId });
  },
  user: async (parent, args, context, info) => {
    return await context.prisma.user(args.where);
  },
  users: async (parent, args, context, info) => {
    return await context.prisma.users({
      where: args.where
    });
  },
  compound: async (parent, args, context, info) => {
    return await context.prisma.compound(args.where);
  },
  compounds: async (parent, args, context, info) => {
    return await context.prisma.compounds({
      where: args.where
    });
  }
};

module.exports = {
  Query
};