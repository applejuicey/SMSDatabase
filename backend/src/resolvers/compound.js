const Compound = {
  msData: async (parent, args, context) => {
    return await context.prisma.compound({ id:parent.id }).msData();
  },
  literatureSource: async (parent, args, context) => {
    return await context.prisma.compound({ id:parent.id }).literatureSource();
  }
};

module.exports = {
  Compound
};