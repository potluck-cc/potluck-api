export const fields = `
        getDoctor(id: ID!): Doctor @aws_cognito_user_pools

        getUser(id: ID!): User @aws_cognito_user_pools

        listStores(
            filter: TableStoreFilterInput
            limit: Int
            nextToken: String
        ): StoreConnection @aws_api_key @aws_cognito_user_pools

        getOrdersByCustomer(customerId: ID!, nextToken: String): OrderConnection

        getStoreByMetadata(metadata: String!): Store @aws_api_key @aws_cognito_user_pools

        getStoreInventory(
            storeId: ID!
            nextToken: String
            filter: TableInventoryItemFilterInput
        ): InventoryItemConnection @aws_api_key @aws_cognito_user_pools

        getStoreInventoryWithFilters(            
            storeId: ID!
            metadata: String
            nextToken: String
            filter: TableInventoryItemFilterInput
        ): InventoryItemConnection @aws_api_key @aws_cognito_user_pools

        validateCart(cart: AWSJSON!, storeId: ID!): [InventoryItem]
`;

export default `
    type Query {
        ${fields}
    }
`;
