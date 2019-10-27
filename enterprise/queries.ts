export default `
    type Query {
        getProduct(slug: String!): Product
        getStore(id: ID!, companyId: ID!): Store
        getCompanyStores(companyId: ID!): StoreConnection
        getStoreInventory(
            storeId: ID!
            nextToken: String
            filter: TableInventoryItemFilterInput
        ): InventoryItemConnection
    }
`;
