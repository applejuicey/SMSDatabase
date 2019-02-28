const { prisma } = require('./generated/prisma-client');

async function initDatabase() {

  const user1 = await prisma.createUser({
    name: 'Alice',
    email: 'alice@prisma.io',
    password: 'residentevil',
    role: 'ADMIN',
  });
  console.log(`init new user 1: name: ${user1.name}; role: ${user1.role}`);

  const user2 = await prisma.createUser({
    name: 'Chris',
    email: 'Chris@prisma.io',
    password: 'residentevil2',
  });
  console.log(`init new user 2: name: ${user2.name}; role: ${user2.role}`);

  const compound1 = await prisma.createCompound({
    commonName: 'Ginsenoside Rb1',
    casCode: '41753-43-9',
    pubChemCID: '9898279',
    chemSpiderID: '8073937',
    smiles: 'C(=CCC[C@@](C)([C@H]1CC[C@@]2([C@@H]1[C@@H](C[C@H]3[C@]2(CC[C@@H]4[C@@]3(CC[C@@H](C4(C)C)O[C@H]5[C@@H]([C@H]([C@@H]([C@H](O5)CO)O)O)O[C@H]6[C@@H]([C@H]([C@@H]([C@H](O6)CO)O)O)O)C)C)O)C)O[C@H]7[C@@H]([C@H]([C@@H]([C@H](O7)CO[C@H]8[C@@H]([C@H]([C@@H]([C@H](O8)CO)O)O)O)O)O)O)C',
    chemicalFormula: 'C54H92O23',
    positiveMSData: {
      create: {
        parentValue: 1107.5957,
        fragmentsValues: {
          set: [945.5428,783.49,621.4372,459.3844,375.2905],
        },
        dataSource: 'Reference standard',
        referenceCodes: {
          set: ['30159954','10497929','18853475','20667431','22839102','23002782','23550959'],
        },
      },
    },
    negativeMSData: {
      create: {
        parentValue: 12,
        fragmentsValues: {
          set: [11.5428,10.49,9.4372,8.3844,7.2905],
        },
        dataSource: 'Reference standard',
        referenceCodes: {
          set: ['3015995','1049792','1885347','2066743','2283910','2300278','2355095'],
        },
      },
    },
    saponinsSource: {
      create: {
        sourceCodes: {
          set: ['30088301','30095259','30159954','30175750','17402096','17401998'],
        }
      },
    },
  });
  console.log(`init new compound 1: name: ${compound1.name}; smiles: ${compound1.smiles}`);

  const compound2 = await prisma.createCompound({
    commonName: 'Ginsenoside Rb2',
    casCode: '11021-13-9',
    pubChemCID: '6917976',
    chemSpiderID: '5293194',
    smiles: 'CC(=CCC[C@@](C)([C@H]1CC[C@@]2([C@@H]1[C@@H](C[C@H]3[C@]2(CC[C@@H]4[C@@]3(CC[C@@H](C4(C)C)O[C@H]5[C@@H]([C@H]([C@@H]([C@H](O5)CO)O)O)O[C@H]6[C@@H]([C@H]([C@@H]([C@H](O6)CO)O)O)O)C)C)O)C)O[C@H]7[C@@H]([C@H]([C@@H]([C@H](O7)CO[C@H]8[C@@H]([C@H]([C@H](CO8)O)O)O)O)O)O)C',
    chemicalFormula: 'C53H90O22',
    positiveMSData: {
      create: {
        parentValue: 1077.5851,
        fragmentsValues: {
          set: [945.5428,915.5323,783.49,621.4372,459.3844],
        },
        dataSource: 'Reference standard',
        referenceCodes: {
          set: ['30159954','10497929','18853475','22839102','23550959','24867296'],
        },
      },
    },
    negativeMSData: {
      create: {
        parentValue: 12,
        fragmentsValues: {
          set: [11.5428,10.49,4.4372,3.3844,2.2905],
        },
        dataSource: 'Reference standard',
        referenceCodes: {
          set: ['301599','104979','1885347','2066743','2283910','2300278','2355095'],
        },
      },
    },
    saponinsSource: {
      create: {
        sourceCodes: {
          set: ['30088301','30159954','17402096','17401998','6518590','11325227'],
        }
      },
    },
  });
  console.log(`init new compound 2: name: ${compound2.name}; smiles: ${compound2.smiles}`);

}

initDatabase().then(() => {
  console.log('init completed successfully');
}).catch(e => {
  console.error(e);
});