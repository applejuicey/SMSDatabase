module.exports = {
        typeDefs: /* GraphQL */ `type AggregateCompound {
  count: Int!
}

type AggregateLiteratureSource {
  count: Int!
}

type AggregateMSData {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Compound {
  id: ID!
  uniqueID: String!
  commonName: String!
  smiles: String!
  chemicalFormula: String!
  structurePicAdd: String
  casCode: String
  pubChemCID: String
  chemSpiderID: String
  msData: MSData!
  literatureSource: LiteratureSource!
}

type CompoundConnection {
  pageInfo: PageInfo!
  edges: [CompoundEdge]!
  aggregate: AggregateCompound!
}

input CompoundCreateInput {
  uniqueID: String!
  commonName: String!
  smiles: String!
  chemicalFormula: String!
  structurePicAdd: String
  casCode: String
  pubChemCID: String
  chemSpiderID: String
  msData: MSDataCreateOneInput!
  literatureSource: LiteratureSourceCreateOneInput!
}

type CompoundEdge {
  node: Compound!
  cursor: String!
}

enum CompoundOrderByInput {
  id_ASC
  id_DESC
  uniqueID_ASC
  uniqueID_DESC
  commonName_ASC
  commonName_DESC
  smiles_ASC
  smiles_DESC
  chemicalFormula_ASC
  chemicalFormula_DESC
  structurePicAdd_ASC
  structurePicAdd_DESC
  casCode_ASC
  casCode_DESC
  pubChemCID_ASC
  pubChemCID_DESC
  chemSpiderID_ASC
  chemSpiderID_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CompoundPreviousValues {
  id: ID!
  uniqueID: String!
  commonName: String!
  smiles: String!
  chemicalFormula: String!
  structurePicAdd: String
  casCode: String
  pubChemCID: String
  chemSpiderID: String
}

type CompoundSubscriptionPayload {
  mutation: MutationType!
  node: Compound
  updatedFields: [String!]
  previousValues: CompoundPreviousValues
}

input CompoundSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CompoundWhereInput
  AND: [CompoundSubscriptionWhereInput!]
  OR: [CompoundSubscriptionWhereInput!]
  NOT: [CompoundSubscriptionWhereInput!]
}

input CompoundUpdateInput {
  uniqueID: String
  commonName: String
  smiles: String
  chemicalFormula: String
  structurePicAdd: String
  casCode: String
  pubChemCID: String
  chemSpiderID: String
  msData: MSDataUpdateOneRequiredInput
  literatureSource: LiteratureSourceUpdateOneRequiredInput
}

input CompoundUpdateManyMutationInput {
  uniqueID: String
  commonName: String
  smiles: String
  chemicalFormula: String
  structurePicAdd: String
  casCode: String
  pubChemCID: String
  chemSpiderID: String
}

input CompoundWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  uniqueID: String
  uniqueID_not: String
  uniqueID_in: [String!]
  uniqueID_not_in: [String!]
  uniqueID_lt: String
  uniqueID_lte: String
  uniqueID_gt: String
  uniqueID_gte: String
  uniqueID_contains: String
  uniqueID_not_contains: String
  uniqueID_starts_with: String
  uniqueID_not_starts_with: String
  uniqueID_ends_with: String
  uniqueID_not_ends_with: String
  commonName: String
  commonName_not: String
  commonName_in: [String!]
  commonName_not_in: [String!]
  commonName_lt: String
  commonName_lte: String
  commonName_gt: String
  commonName_gte: String
  commonName_contains: String
  commonName_not_contains: String
  commonName_starts_with: String
  commonName_not_starts_with: String
  commonName_ends_with: String
  commonName_not_ends_with: String
  smiles: String
  smiles_not: String
  smiles_in: [String!]
  smiles_not_in: [String!]
  smiles_lt: String
  smiles_lte: String
  smiles_gt: String
  smiles_gte: String
  smiles_contains: String
  smiles_not_contains: String
  smiles_starts_with: String
  smiles_not_starts_with: String
  smiles_ends_with: String
  smiles_not_ends_with: String
  chemicalFormula: String
  chemicalFormula_not: String
  chemicalFormula_in: [String!]
  chemicalFormula_not_in: [String!]
  chemicalFormula_lt: String
  chemicalFormula_lte: String
  chemicalFormula_gt: String
  chemicalFormula_gte: String
  chemicalFormula_contains: String
  chemicalFormula_not_contains: String
  chemicalFormula_starts_with: String
  chemicalFormula_not_starts_with: String
  chemicalFormula_ends_with: String
  chemicalFormula_not_ends_with: String
  structurePicAdd: String
  structurePicAdd_not: String
  structurePicAdd_in: [String!]
  structurePicAdd_not_in: [String!]
  structurePicAdd_lt: String
  structurePicAdd_lte: String
  structurePicAdd_gt: String
  structurePicAdd_gte: String
  structurePicAdd_contains: String
  structurePicAdd_not_contains: String
  structurePicAdd_starts_with: String
  structurePicAdd_not_starts_with: String
  structurePicAdd_ends_with: String
  structurePicAdd_not_ends_with: String
  casCode: String
  casCode_not: String
  casCode_in: [String!]
  casCode_not_in: [String!]
  casCode_lt: String
  casCode_lte: String
  casCode_gt: String
  casCode_gte: String
  casCode_contains: String
  casCode_not_contains: String
  casCode_starts_with: String
  casCode_not_starts_with: String
  casCode_ends_with: String
  casCode_not_ends_with: String
  pubChemCID: String
  pubChemCID_not: String
  pubChemCID_in: [String!]
  pubChemCID_not_in: [String!]
  pubChemCID_lt: String
  pubChemCID_lte: String
  pubChemCID_gt: String
  pubChemCID_gte: String
  pubChemCID_contains: String
  pubChemCID_not_contains: String
  pubChemCID_starts_with: String
  pubChemCID_not_starts_with: String
  pubChemCID_ends_with: String
  pubChemCID_not_ends_with: String
  chemSpiderID: String
  chemSpiderID_not: String
  chemSpiderID_in: [String!]
  chemSpiderID_not_in: [String!]
  chemSpiderID_lt: String
  chemSpiderID_lte: String
  chemSpiderID_gt: String
  chemSpiderID_gte: String
  chemSpiderID_contains: String
  chemSpiderID_not_contains: String
  chemSpiderID_starts_with: String
  chemSpiderID_not_starts_with: String
  chemSpiderID_ends_with: String
  chemSpiderID_not_ends_with: String
  msData: MSDataWhereInput
  literatureSource: LiteratureSourceWhereInput
  AND: [CompoundWhereInput!]
  OR: [CompoundWhereInput!]
  NOT: [CompoundWhereInput!]
}

input CompoundWhereUniqueInput {
  id: ID
  uniqueID: String
  commonName: String
  casCode: String
  pubChemCID: String
  chemSpiderID: String
}

type LiteratureSource {
  id: ID!
  sourceCodes: [String!]!
}

type LiteratureSourceConnection {
  pageInfo: PageInfo!
  edges: [LiteratureSourceEdge]!
  aggregate: AggregateLiteratureSource!
}

input LiteratureSourceCreateInput {
  sourceCodes: LiteratureSourceCreatesourceCodesInput
}

input LiteratureSourceCreateOneInput {
  create: LiteratureSourceCreateInput
  connect: LiteratureSourceWhereUniqueInput
}

input LiteratureSourceCreatesourceCodesInput {
  set: [String!]
}

type LiteratureSourceEdge {
  node: LiteratureSource!
  cursor: String!
}

enum LiteratureSourceOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LiteratureSourcePreviousValues {
  id: ID!
  sourceCodes: [String!]!
}

type LiteratureSourceSubscriptionPayload {
  mutation: MutationType!
  node: LiteratureSource
  updatedFields: [String!]
  previousValues: LiteratureSourcePreviousValues
}

input LiteratureSourceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LiteratureSourceWhereInput
  AND: [LiteratureSourceSubscriptionWhereInput!]
  OR: [LiteratureSourceSubscriptionWhereInput!]
  NOT: [LiteratureSourceSubscriptionWhereInput!]
}

input LiteratureSourceUpdateDataInput {
  sourceCodes: LiteratureSourceUpdatesourceCodesInput
}

input LiteratureSourceUpdateInput {
  sourceCodes: LiteratureSourceUpdatesourceCodesInput
}

input LiteratureSourceUpdateManyMutationInput {
  sourceCodes: LiteratureSourceUpdatesourceCodesInput
}

input LiteratureSourceUpdateOneRequiredInput {
  create: LiteratureSourceCreateInput
  update: LiteratureSourceUpdateDataInput
  upsert: LiteratureSourceUpsertNestedInput
  connect: LiteratureSourceWhereUniqueInput
}

input LiteratureSourceUpdatesourceCodesInput {
  set: [String!]
}

input LiteratureSourceUpsertNestedInput {
  update: LiteratureSourceUpdateDataInput!
  create: LiteratureSourceCreateInput!
}

input LiteratureSourceWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [LiteratureSourceWhereInput!]
  OR: [LiteratureSourceWhereInput!]
  NOT: [LiteratureSourceWhereInput!]
}

input LiteratureSourceWhereUniqueInput {
  id: ID
}

scalar Long

type MSData {
  id: ID!
  parentValue1: Float
  parentValue2: Float
  parentValue3: Float
  parentValue4: Float
  parentValue5: Float
  parentValue6: Float
  fragmentsValues1: [Float!]!
  fragmentsValues2: [Float!]!
  dataSource1: [String!]!
  referenceCodes1: [String!]!
  dataSource2: [String!]!
  referenceCodes2: [String!]!
  spectrumPicAddArray1: [String!]!
  spectrumPicAddArray2: [String!]!
}

type MSDataConnection {
  pageInfo: PageInfo!
  edges: [MSDataEdge]!
  aggregate: AggregateMSData!
}

input MSDataCreatedataSource1Input {
  set: [String!]
}

input MSDataCreatedataSource2Input {
  set: [String!]
}

input MSDataCreatefragmentsValues1Input {
  set: [Float!]
}

input MSDataCreatefragmentsValues2Input {
  set: [Float!]
}

input MSDataCreateInput {
  parentValue1: Float
  parentValue2: Float
  parentValue3: Float
  parentValue4: Float
  parentValue5: Float
  parentValue6: Float
  fragmentsValues1: MSDataCreatefragmentsValues1Input
  fragmentsValues2: MSDataCreatefragmentsValues2Input
  dataSource1: MSDataCreatedataSource1Input
  referenceCodes1: MSDataCreatereferenceCodes1Input
  dataSource2: MSDataCreatedataSource2Input
  referenceCodes2: MSDataCreatereferenceCodes2Input
  spectrumPicAddArray1: MSDataCreatespectrumPicAddArray1Input
  spectrumPicAddArray2: MSDataCreatespectrumPicAddArray2Input
}

input MSDataCreateOneInput {
  create: MSDataCreateInput
  connect: MSDataWhereUniqueInput
}

input MSDataCreatereferenceCodes1Input {
  set: [String!]
}

input MSDataCreatereferenceCodes2Input {
  set: [String!]
}

input MSDataCreatespectrumPicAddArray1Input {
  set: [String!]
}

input MSDataCreatespectrumPicAddArray2Input {
  set: [String!]
}

type MSDataEdge {
  node: MSData!
  cursor: String!
}

enum MSDataOrderByInput {
  id_ASC
  id_DESC
  parentValue1_ASC
  parentValue1_DESC
  parentValue2_ASC
  parentValue2_DESC
  parentValue3_ASC
  parentValue3_DESC
  parentValue4_ASC
  parentValue4_DESC
  parentValue5_ASC
  parentValue5_DESC
  parentValue6_ASC
  parentValue6_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MSDataPreviousValues {
  id: ID!
  parentValue1: Float
  parentValue2: Float
  parentValue3: Float
  parentValue4: Float
  parentValue5: Float
  parentValue6: Float
  fragmentsValues1: [Float!]!
  fragmentsValues2: [Float!]!
  dataSource1: [String!]!
  referenceCodes1: [String!]!
  dataSource2: [String!]!
  referenceCodes2: [String!]!
  spectrumPicAddArray1: [String!]!
  spectrumPicAddArray2: [String!]!
}

type MSDataSubscriptionPayload {
  mutation: MutationType!
  node: MSData
  updatedFields: [String!]
  previousValues: MSDataPreviousValues
}

input MSDataSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MSDataWhereInput
  AND: [MSDataSubscriptionWhereInput!]
  OR: [MSDataSubscriptionWhereInput!]
  NOT: [MSDataSubscriptionWhereInput!]
}

input MSDataUpdateDataInput {
  parentValue1: Float
  parentValue2: Float
  parentValue3: Float
  parentValue4: Float
  parentValue5: Float
  parentValue6: Float
  fragmentsValues1: MSDataUpdatefragmentsValues1Input
  fragmentsValues2: MSDataUpdatefragmentsValues2Input
  dataSource1: MSDataUpdatedataSource1Input
  referenceCodes1: MSDataUpdatereferenceCodes1Input
  dataSource2: MSDataUpdatedataSource2Input
  referenceCodes2: MSDataUpdatereferenceCodes2Input
  spectrumPicAddArray1: MSDataUpdatespectrumPicAddArray1Input
  spectrumPicAddArray2: MSDataUpdatespectrumPicAddArray2Input
}

input MSDataUpdatedataSource1Input {
  set: [String!]
}

input MSDataUpdatedataSource2Input {
  set: [String!]
}

input MSDataUpdatefragmentsValues1Input {
  set: [Float!]
}

input MSDataUpdatefragmentsValues2Input {
  set: [Float!]
}

input MSDataUpdateInput {
  parentValue1: Float
  parentValue2: Float
  parentValue3: Float
  parentValue4: Float
  parentValue5: Float
  parentValue6: Float
  fragmentsValues1: MSDataUpdatefragmentsValues1Input
  fragmentsValues2: MSDataUpdatefragmentsValues2Input
  dataSource1: MSDataUpdatedataSource1Input
  referenceCodes1: MSDataUpdatereferenceCodes1Input
  dataSource2: MSDataUpdatedataSource2Input
  referenceCodes2: MSDataUpdatereferenceCodes2Input
  spectrumPicAddArray1: MSDataUpdatespectrumPicAddArray1Input
  spectrumPicAddArray2: MSDataUpdatespectrumPicAddArray2Input
}

input MSDataUpdateManyMutationInput {
  parentValue1: Float
  parentValue2: Float
  parentValue3: Float
  parentValue4: Float
  parentValue5: Float
  parentValue6: Float
  fragmentsValues1: MSDataUpdatefragmentsValues1Input
  fragmentsValues2: MSDataUpdatefragmentsValues2Input
  dataSource1: MSDataUpdatedataSource1Input
  referenceCodes1: MSDataUpdatereferenceCodes1Input
  dataSource2: MSDataUpdatedataSource2Input
  referenceCodes2: MSDataUpdatereferenceCodes2Input
  spectrumPicAddArray1: MSDataUpdatespectrumPicAddArray1Input
  spectrumPicAddArray2: MSDataUpdatespectrumPicAddArray2Input
}

input MSDataUpdateOneRequiredInput {
  create: MSDataCreateInput
  update: MSDataUpdateDataInput
  upsert: MSDataUpsertNestedInput
  connect: MSDataWhereUniqueInput
}

input MSDataUpdatereferenceCodes1Input {
  set: [String!]
}

input MSDataUpdatereferenceCodes2Input {
  set: [String!]
}

input MSDataUpdatespectrumPicAddArray1Input {
  set: [String!]
}

input MSDataUpdatespectrumPicAddArray2Input {
  set: [String!]
}

input MSDataUpsertNestedInput {
  update: MSDataUpdateDataInput!
  create: MSDataCreateInput!
}

input MSDataWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  parentValue1: Float
  parentValue1_not: Float
  parentValue1_in: [Float!]
  parentValue1_not_in: [Float!]
  parentValue1_lt: Float
  parentValue1_lte: Float
  parentValue1_gt: Float
  parentValue1_gte: Float
  parentValue2: Float
  parentValue2_not: Float
  parentValue2_in: [Float!]
  parentValue2_not_in: [Float!]
  parentValue2_lt: Float
  parentValue2_lte: Float
  parentValue2_gt: Float
  parentValue2_gte: Float
  parentValue3: Float
  parentValue3_not: Float
  parentValue3_in: [Float!]
  parentValue3_not_in: [Float!]
  parentValue3_lt: Float
  parentValue3_lte: Float
  parentValue3_gt: Float
  parentValue3_gte: Float
  parentValue4: Float
  parentValue4_not: Float
  parentValue4_in: [Float!]
  parentValue4_not_in: [Float!]
  parentValue4_lt: Float
  parentValue4_lte: Float
  parentValue4_gt: Float
  parentValue4_gte: Float
  parentValue5: Float
  parentValue5_not: Float
  parentValue5_in: [Float!]
  parentValue5_not_in: [Float!]
  parentValue5_lt: Float
  parentValue5_lte: Float
  parentValue5_gt: Float
  parentValue5_gte: Float
  parentValue6: Float
  parentValue6_not: Float
  parentValue6_in: [Float!]
  parentValue6_not_in: [Float!]
  parentValue6_lt: Float
  parentValue6_lte: Float
  parentValue6_gt: Float
  parentValue6_gte: Float
  AND: [MSDataWhereInput!]
  OR: [MSDataWhereInput!]
  NOT: [MSDataWhereInput!]
}

input MSDataWhereUniqueInput {
  id: ID
}

type Mutation {
  createCompound(data: CompoundCreateInput!): Compound!
  updateCompound(data: CompoundUpdateInput!, where: CompoundWhereUniqueInput!): Compound
  updateManyCompounds(data: CompoundUpdateManyMutationInput!, where: CompoundWhereInput): BatchPayload!
  upsertCompound(where: CompoundWhereUniqueInput!, create: CompoundCreateInput!, update: CompoundUpdateInput!): Compound!
  deleteCompound(where: CompoundWhereUniqueInput!): Compound
  deleteManyCompounds(where: CompoundWhereInput): BatchPayload!
  createLiteratureSource(data: LiteratureSourceCreateInput!): LiteratureSource!
  updateLiteratureSource(data: LiteratureSourceUpdateInput!, where: LiteratureSourceWhereUniqueInput!): LiteratureSource
  updateManyLiteratureSources(data: LiteratureSourceUpdateManyMutationInput!, where: LiteratureSourceWhereInput): BatchPayload!
  upsertLiteratureSource(where: LiteratureSourceWhereUniqueInput!, create: LiteratureSourceCreateInput!, update: LiteratureSourceUpdateInput!): LiteratureSource!
  deleteLiteratureSource(where: LiteratureSourceWhereUniqueInput!): LiteratureSource
  deleteManyLiteratureSources(where: LiteratureSourceWhereInput): BatchPayload!
  createMSData(data: MSDataCreateInput!): MSData!
  updateMSData(data: MSDataUpdateInput!, where: MSDataWhereUniqueInput!): MSData
  updateManyMSDatas(data: MSDataUpdateManyMutationInput!, where: MSDataWhereInput): BatchPayload!
  upsertMSData(where: MSDataWhereUniqueInput!, create: MSDataCreateInput!, update: MSDataUpdateInput!): MSData!
  deleteMSData(where: MSDataWhereUniqueInput!): MSData
  deleteManyMSDatas(where: MSDataWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  compound(where: CompoundWhereUniqueInput!): Compound
  compounds(where: CompoundWhereInput, orderBy: CompoundOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Compound]!
  compoundsConnection(where: CompoundWhereInput, orderBy: CompoundOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CompoundConnection!
  literatureSource(where: LiteratureSourceWhereUniqueInput!): LiteratureSource
  literatureSources(where: LiteratureSourceWhereInput, orderBy: LiteratureSourceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LiteratureSource]!
  literatureSourcesConnection(where: LiteratureSourceWhereInput, orderBy: LiteratureSourceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LiteratureSourceConnection!
  mSData(where: MSDataWhereUniqueInput!): MSData
  mSDatas(where: MSDataWhereInput, orderBy: MSDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MSData]!
  mSDatasConnection(where: MSDataWhereInput, orderBy: MSDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MSDataConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

enum RoleType {
  ROOT
  ADMIN
  USER
}

type Subscription {
  compound(where: CompoundSubscriptionWhereInput): CompoundSubscriptionPayload
  literatureSource(where: LiteratureSourceSubscriptionWhereInput): LiteratureSourceSubscriptionPayload
  mSData(where: MSDataSubscriptionWhereInput): MSDataSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String
  email: String!
  password: String!
  role: RoleType!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String
  email: String!
  password: String!
  role: RoleType
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  role_ASC
  role_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String
  email: String!
  password: String!
  role: RoleType!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  role: RoleType
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
  role: RoleType
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  role: RoleType
  role_not: RoleType
  role_in: [RoleType!]
  role_not_in: [RoleType!]
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    