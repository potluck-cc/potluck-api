export const fields = `
        getProduct(slug: String!): Product
        getStore(id: ID!, companyId: ID!): Store
        getCompanyStores(companyId: ID!): StoreConnection
        getStoreInventory(
            storeId: ID!
            nextToken: String
            filter: TableInventoryItemFilterInput
        ): InventoryItemConnection
        getStoreInventoryWithFilters(            
            storeId: ID!
            metadata: String
            nextToken: String
            filter: TableInventoryItemFilterInput
        ): InventoryItemConnection
        getOrdersByStore(storeId: ID!): OrderConnection
        getOrdersByStoreAndDate(
            storeId: ID!
            from: AWSTimestamp!
            to: AWSTimestamp! 
            nextToken: String
            filter: TableOrderFilterInput
        ): OrderConnection
        getOrderByStoreAndCode(
            storeId: ID!
            code: String!
        ): Order
`;

export default `
    type Query {
        ${fields}
    }
`;
