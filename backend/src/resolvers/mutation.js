const { signToken } = require('../utils/token-processor');

const Mutation = {
  login: async (parent, args, context, info) => {
    const user = await context.prisma.user({ email: args.email });
    if (!user) {
      throw new Error(`Email【${args.email}】对应的用户不存在！`)
    }
    const passwordValid = user.password === args.password;
    if (!passwordValid) {
      throw new Error('密码不正确！')
    }
    return {
      token: signToken({
        id: user.id,
        email: user.email
      }),
      currentUser: user,
    }
  },
  createUser: async (parent, args, context, info) => {
    return await context.prisma.createUser(args.data);
  },
  updateUser: async (parent, args, context, info) => {
    if (args.data.password) {
      // 传过来的密码不为空代表新密码
      return await context.prisma.updateUser({
        data: args.data,
        where: args.where
      });
    } else {
      // 传过来的密码为空代表不修改密码
      const updateObject = {
        name: args.data.name,
        email: args.data.email,
        role: args.data.role
      };
      return await context.prisma.updateUser({
        data: updateObject,
        where: args.where
      });
    }
  },
  deleteUser: async (parent, args, context, info) => {
    return await context.prisma.deleteUser(args.where);
  },
  createCompound: async (parent, args, context, info) => {
    return await context.prisma.createCompound(args.data);
  },
  updateCompound: async (parent, args, context, info) => {
    return await context.prisma.updateCompound({
      data: args.data,
      where: args.where
    });
  },
  deleteCompound: async (parent, args, context, info) => {
    return await context.prisma.deleteCompound(args.where);
  }
};

module.exports = {
  Mutation
};