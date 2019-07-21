import gql from 'graphql-tag';

const LOGIN = gql`mutation ($email: String!, $password: String!) {
                    login(email: $email, password: $password) {
                      currentUser{
                        id
                        email
                        name
                        role
                      }
                      token
                    }
                  }`;

const ME = gql`query {
                 me {
                   id
                   email
                   name
                   role
                 }
               }`;

const UPDATEUSER = gql`mutation ($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
                         updateUser(data: $data, where: $where) {
                           id
                           email
                           name
                           role
                         }
                       }`;

const COMPOUNDWHERE = gql`query ($where: CompoundWhereUniqueInput!) {
                                  compound(where: $where) {
                                    uniqueID
                                    commonName
                                    chemicalFormula
                                    msData{
                                      parentValue1
                                      parentValue2
                                      parentValue3
                                      parentValue4
                                      parentValue5
                                      parentValue6
                                    }
                                  }
                                }`;

const COMPOUNDSWHERE = gql`query ($where: CompoundWhereInput) {
                                    compounds(where: $where) {
                                      id
                                      uniqueID
                                      structurePicAdd
                                      commonName
                                      chemicalFormula
                                      smiles
                                      casCode
                                      chemSpiderID
                                      pubChemCID
                                      msData{
                                        parentValue1
                                        parentValue2
                                        parentValue3
                                        parentValue4
                                        parentValue5
                                        parentValue6
                                        fragmentsValues1
                                        fragmentsValues2
                                        dataSource1
                                        referenceCodes1
                                        dataSource2
                                        referenceCodes2
                                        spectrumPicAddArray1
                                        spectrumPicAddArray2
                                      }
                                      literatureSource{
                                        sourceCodes
                                      }
                                    }
                                  }`;

const CREATECOMPOUND = gql`mutation ($data: CompoundCreateInput!) {
                                      createCompound(data: $data) {
                                          id
                                          uniqueID
                                          structurePicAdd
                                          commonName
                                          chemicalFormula
                                          smiles
                                          casCode
                                          chemSpiderID
                                          pubChemCID
                                          msData{
                                              parentValue1
                                              parentValue2
                                              parentValue3
                                              parentValue4
                                              parentValue5
                                              parentValue6
                                              fragmentsValues1
                                              fragmentsValues2
                                              dataSource1
                                              referenceCodes1
                                              dataSource2
                                              referenceCodes2
                                              spectrumPicAddArray1
                                              spectrumPicAddArray2
                                          }
                                          literatureSource{
                                              sourceCodes
                                          }
                                      }
                                  }`;

const UPDATECOMPOUND = gql`mutation ($data: CompoundUpdateInput!, $where: CompoundWhereUniqueInput!) {
                                      updateCompound(data: $data, where: $where) {
                                          id
                                          uniqueID
                                          structurePicAdd
                                          commonName
                                          chemicalFormula
                                          smiles
                                          casCode
                                          chemSpiderID
                                          pubChemCID
                                          msData{
                                              parentValue1
                                              parentValue2
                                              parentValue3
                                              parentValue4
                                              parentValue5
                                              parentValue6
                                              fragmentsValues1
                                              fragmentsValues2
                                              dataSource1
                                              referenceCodes1
                                              dataSource2
                                              referenceCodes2
                                              spectrumPicAddArray1
                                              spectrumPicAddArray2
                                          }
                                          literatureSource{
                                              sourceCodes
                                          }
                                      }
                                  }`;

const DELETECOMPOUND = gql`mutation ($where: CompoundWhereUniqueInput) {
                                          deleteCompound(where: $where) {
                                              id
                                              uniqueID
                                              commonName
                                              chemicalFormula
                                              smiles
                                          }
                                      }`;

export { LOGIN, ME, UPDATEUSER, COMPOUNDWHERE, COMPOUNDSWHERE, CREATECOMPOUND, UPDATECOMPOUND, DELETECOMPOUND };
