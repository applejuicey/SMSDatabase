const { prisma } = require('../prisma/generated/prisma-client')
const resolvers = {
  Query: {

    getUserById(root, args, context) {
      return context.prisma.user({
        id: args.userId
      });
    },
    getUserByEmail(root, args, context) {
      return context.prisma.user({
        email: args.email
      });
    },
    getCompoundById(root, args, context) {
      return context.prisma.compound({
        id: args.compoundId
      });
    },
    // getCompoundsByMSPositiveParentValue(root, args, context) {
    //   return context.prisma.compounds({
    //     where: {
    //       positiveMSData: {
    //         parentValue: args.positiveParentValue
    //       }
    //     }
    //   });
    // }
  },
  // Mutation: {
    // createDraft(root, args, context) {
    //   return context.prisma.createPost(
    //       {
    //         title: args.title,
    //         author: {
    //           connect: { id: args.userId }
    //         }
    //       },
    //
    //   )
    // },
    // publish(root, args, context) {
    //   return context.prisma.updatePost(
    //       {
    //         where: { id: args.postId },
    //         data: { published: true },
    //       },
    //
    //   )
    // },
    // createUser(root, args, context) {
    //   return context.prisma.createUser(
    //       { name: args.name },
    //   )
    // }
  // },
  // User: {
  //   posts(root, args, context) {
  //     return context.prisma.user({
  //       id: root.id
  //     }).posts()
  //   }
  // },
  // Post: {
  //   author(root, args, context) {
  //     return context.prisma.post({
  //       id: root.id
  //     }).author()
  //   }
  // }
};

module.exports = {
  resolvers
};