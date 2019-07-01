const { prisma } = require('./generated/prisma-client');

async function initDatabase() {

  const user1 = await prisma.createUser({
    name: 'SMSDAdmin1',
    email: 'admin1@smsd.com',
    password: '12345678',
    role: 'ADMIN',
  });
  console.log(`init new user 1: name: ${user1.name}; role: ${user1.role}`);

  const user2 = await prisma.createUser({
    name: 'SMSDUser1',
    email: 'user1@smsd.com',
    password: '87654321',
  });
  console.log(`init new user 2: name: ${user2.name}; role: ${user2.role}`);

  const compound1 = await prisma.createCompound({
    commonName: 'Ginsenoside Rb1',
    uniqueID: '1',
    structurePicAdd: 'https://i.loli.net/2019/05/02/5ccab4a816643.png',
    smiles: 'C(=CCC[C@@](C)([C@H]1CC[C@@]2([C@@H]1[C@@H](C[C@H]3[C@]2(CC[C@@H]4[C@@]3(CC[C@@H](C4(C)C)O[C@H]5[C@@H]([C@H]([C@@H]([C@H](O5)CO)O)O)O[C@H]6[C@@H]([C@H]([C@@H]([C@H](O6)CO)O)O)O)C)C)O)C)O[C@H]7[C@@H]([C@H]([C@@H]([C@H](O7)CO[C@H]8[C@@H]([C@H]([C@@H]([C@H](O8)CO)O)O)O)O)O)O)C',
    chemicalFormula: 'C54H92O23',
    casCode: '41753-43-9',
    pubChemCID: '9898279',
    chemSpiderID: '8073937',
    msData: {
      create: {
        parentValue1: 1107.5957,
        parentValue2: 12,
        fragmentsValues1: {
          set: [945.5428,783.49,621.4372,459.3844,375.2905]
        },
        fragmentsValues2: {
          set: [1,2,3,4,5]
        },
        dataSource1: {
          set: ['Reference standard']
        },
        referenceCodes1: {
          set: ['30159954','10497929','18853475','20667431','22839102','23002782','23550959']
        },
        dataSource2: {
          set: ['Prediction']
        },
        referenceCodes2: {
          set: ['22','33','44','20667431','22839102','23002782','23550959']
        },
        spectrumPicAddArray1: {
          set: ['https://i.loli.net/2019/05/02/5ccab4c0e4e8e.png']
        },
        spectrumPicAddArray2: {
          set: ['https://i.loli.net/2019/05/02/5ccab4c0e4e8e.png']
        },
      }
    },
    literatureSource: {
      create: {
        sourceCodes: {
          set: ['30088301','30095259','30159954','30175750','17402096','17401998']
        }
      }
    },
  });
  console.log(`init new compound 1: name: ${compound1.commonName}; smiles: ${compound1.smiles}`);

  const compound2 = await prisma.createCompound({
    commonName: 'Ginsenoside Rb2',
    uniqueID: '2',
    structurePicAdd: 'https://i.loli.net/2019/05/02/5ccab579645e3.png',
    smiles: 'CC@H]5[C@@H]([C@H]([C@@H]([C@H](O5)CO)O)](O7)CO[C@H]8[C@@H]([C@H]([C@H](CO8)O)O)O)O)O)O)C',
    chemicalFormula: 'C53H90O22',
    casCode: '11021-13-9',
    pubChemCID: '6917976',
    chemSpiderID: '5293194',
    msData: {
      create: {
        parentValue1: 1077.5851,
        parentValue2: 12,
        fragmentsValues1: {
          set: [945.5428,915.5323,783.49,621.4372,459.3844]
        },
        fragmentsValues2: {
          set: [1,2,3,4,5]
        },
        dataSource1: {
          set: ['Reference standard']
        },
        referenceCodes1: {
          set: ['30159954','10497929','18853475','22839102','23550959','24867296']
        },
        dataSource2: {
          set: ['Prediction']
        },
        referenceCodes2: {
          set: ['777','666','18853475','22839102','23550959','24867296']
        },
        spectrumPicAddArray1: {
          set: ['https://i.loli.net/2019/05/02/5ccab57967b8c.png', 'null']
        },
        spectrumPicAddArray2: {
          set: ['null', 'https://i.loli.net/2019/05/02/5ccab57967b8c.png', 'null']
        },
      }
    },
    literatureSource: {
      create: {
        sourceCodes: {
          set: ['30088301','30159954','17402096','17401998','6518590','11325227']
        }
      }
    }
  });
  console.log(`init new compound 2: name: ${compound2.commonName}; smiles: ${compound2.smiles}`);

}

initDatabase().then(() => {
  console.log('初始化数据库完成');
}).catch(e => {
  console.error(e);
});