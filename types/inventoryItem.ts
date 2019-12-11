const optionFields = `
    amount: Float
    weight: WeightOptions
`;

const inventoryItemFields = `
        storeId: ID!
        id: ID!
        metadata: String!
        product: Product!
        productType: ProductType!
        image: AWSURL
        quantity: Float
        thc: String
        cbd: String
        description: String
        strainType: StrainType
        brand: String
        displayName: String
        price: Float
        options: [Option]
        isCannabisProduct: Boolean
        location: Geolocation
        createdAt: AWSTimestamp
        updatedAt: AWSTimestamp
`;

const types = `
    type Option {
        ${optionFields}
    }

    type InventoryItem {
        ${inventoryItemFields}
    }

    type InventoryItemConnection {
        items: [InventoryItem]
        nextToken: String
    }
`;

const inputs = `
    input CreateInventoryItemInput {
        storeId: ID!
        metadata: String!
        product: String!
        options: AWSJSON
        quantity: Float
        productType: ProductType!
        thc: String
        cbd: String
        image: AWSURL
        description: String
        price: Float
        strainType: StrainType
        brand: String
        displayName: String
        isCannabisProduct: Boolean
        latitude: Float
        longitude: Float
        createdAt: AWSTimestamp!
        updatedAt: AWSTimestamp
        location: AWSJSON
    }

    input DeleteInventoryItemInput {
        storeId: ID!
        id: ID!
    }

    input UpdateInventoryItemInput {
        id: ID!
        storeId: ID!
        thc: String
        cbd: String
        options: AWSJSON
        productType: ProductType
        quantity: Float
        product: String
        image: AWSURL
        description: String
        price: Float
        strainType: StrainType
        brand: String
        displayName: String
        isCannabisProduct: Boolean
        latitude: Float
        longitude: Float
        updatedAt: AWSTimestamp
        location: AWSJSON
    }

    input UpdateStockInput {
        storeId: ID!
        id: ID!
        quantity: Float
        operator: String
    }

    input TableInventoryItemFilterInput {
        id: TableIDFilterInput
        product: TableStringFilterInput
        quantity: TableFloatFilterInput
        productType: TableStringFilterInput
        isCannabisProduct: TableBooleanFilterInput
    }
`;

export function generateInventoryItem(authorizationType: string) {
  return `
    type Option ${authorizationType} {
        ${optionFields}
    }

    type InventoryItem ${authorizationType} {
        ${inventoryItemFields}
    }

    type InventoryItemConnection ${authorizationType} {
        items: [InventoryItem]
        nextToken: String
    }

    ${inputs}
    `;
}

export const inventoryItem = "".concat(types, inputs);
