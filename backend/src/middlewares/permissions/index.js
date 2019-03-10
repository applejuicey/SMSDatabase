const { rule, shield, and, or, not } = require('graphql-shield');
const { verifyAndDecodeToken } = require('../../utils/token-processor');

const rules = {
  isROOT: rule()(async (parent, args, context, info) => {
    const currentUserId = verifyAndDecodeToken(context).id;
    const currentUserRole = await context.prisma.user({ id: currentUserId }).role();
    return currentUserRole === 'ROOT';
  }),
  isADMIN: rule()(async (parent, args, context, info) => {
    const currentUserId = verifyAndDecodeToken(context).id;
    const currentUserRole = await context.prisma.user({ id: currentUserId }).role();
    return currentUserRole === 'ADMIN';
  }),
  isSELF: rule()(async (parent, args, context, info) => {
    const currentUserId = verifyAndDecodeToken(context).id;
    const targetUserId = await context.prisma.user(args.where).id();
    return currentUserId === targetUserId;
  }),
  // 角色为USER的用户不能update自己的role为ADMIN或ROOT
  userNotUpdatingRole: rule()(async (parent, args, context, info) => {
    const currentUserId = verifyAndDecodeToken(context).id;
    const currentUserRole = await context.prisma.user({ id: currentUserId }).role();
    if (currentUserRole === 'USER') {
      if (args.data.role === 'ADMIN' || args.data.role === 'ROOT') {
        return false;
      }
    }
    return true;
  })
};

const permissions = shield({
  Query: {
    user: or(rules.isROOT, rules.isADMIN),
    users: or(rules.isROOT, rules.isADMIN)
  },
  Mutation: {
    createUser: or(rules.isROOT, rules.isADMIN),
    updateUser: or(rules.isROOT, rules.isADMIN, and(rules.isSELF, rules.userNotUpdatingRole)),
    deleteUser: or(rules.isROOT, rules.isADMIN),
    createCompound: or(rules.isROOT, rules.isADMIN),
    updateCompound: or(rules.isROOT, rules.isADMIN),
    deleteCompound: or(rules.isROOT, rules.isADMIN),
  }
}, {
  debug: false,
  allowExternalErrors: false
});

module.exports = {
  permissions
};