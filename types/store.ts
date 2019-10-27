const storeFields = `
        id: ID!
        companyId: ID!
        hours: [timeblock]
        inventory: InventoryItemConnection
        name: String!
        phone: String
        latitude: Float!
        longitude: Float!
        state: State!
        city: String!
        link: AWSURL
        street: String!
        zip: String!
        logo: AWSURL
        storefrontImage: AWSURL
        pickup: Boolean
        delivery: Boolean
        maxDays: Int
        drivers: StoreDrivers
        public: Boolean
`;

const storeDriverFields = `
        id: ID
        firstname: String
        lastname: String
`;

const types = `
    type Store {
        ${storeFields}
    }

    type StoreDrivers {
        ${storeDriverFields}
    }

    type StoreConnection {
        items: [Store]
        nextToken: String
    }
`;

const inputs = `
    input CreateStoreInput {
        companyId: ID!
        hours: AWSJSON
        name: String!
        phone: AWSPhone
        latitude: Float!
        longitude: Float!
        state: State!
        city: String!
        link: AWSURL
        street: String!
        zip: String!
        logo: AWSURL
        storefrontImage: AWSURL
        pickup: Boolean
        delivery: Boolean
        maxDays: Int
        drivers: AWSJSON
        public: Boolean
    }

    input UpdateStoreInput {
        companyId: ID!
        id: ID!
        address: String
        hours: AWSJSON
        name: String
        latitude: Float
        longitude: Float
        state: State
        city: String
        street: String
        link: AWSURL
        zip: String
        phone: AWSPhone
        logo: AWSURL
        storefrontImage: AWSURL
        pickup: Boolean
        delivery: Boolean
        maxDays: Int
        drivers: AWSJSON
        public: Boolean
    }

    input DeleteStoreInput {
        companyId: ID!
        id: ID!
    }

    input TableStoreFilterInput {
        city: TableStringFilterInput
        id: TableIDFilterInput
        inventory: TableStringFilterInput
        name: TableStringFilterInput
        zip: TableStringFilterInput
        pickup: TableBooleanFilterInput
        delivery: TableBooleanFilterInput
        public: TableBooleanFilterInput
    }
`;

export function generateStore(authorizationType: string) {
  return `
    type StoreDrivers ${authorizationType} {
        ${storeDriverFields}
    }

    type Store ${authorizationType} {
        ${storeFields}
    }

    type StoreConnection ${authorizationType} {
        items: [Store]
        nextToken: String
    }

    ${inputs}

    `;
}

export const store = "".concat(types, inputs);
