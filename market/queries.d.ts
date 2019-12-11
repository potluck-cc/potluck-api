export declare const fields = "\n        getDoctor(id: ID!): Doctor @aws_cognito_user_pools\n\n        getUser(id: ID!): User @aws_cognito_user_pools\n\n        listStores(\n            filter: TableStoreFilterInput\n            limit: Int\n            nextToken: String\n        ): StoreConnection @aws_api_key @aws_cognito_user_pools\n\n        getOrdersByCustomer(customerId: ID!, nextToken: String): OrderConnection\n\n        getStoreByMetadata(metadata: String!): Store @aws_api_key @aws_cognito_user_pools\n\n        getStoreInventory(\n            storeId: ID!\n            nextToken: String\n            filter: TableInventoryItemFilterInput\n        ): InventoryItemConnection @aws_api_key @aws_cognito_user_pools\n\n        getStoreInventoryWithFilters(            \n            storeId: ID!\n            metadata: String\n            nextToken: String\n            filter: TableInventoryItemFilterInput\n        ): InventoryItemConnection @aws_api_key @aws_cognito_user_pools\n\n        validateCart(cart: AWSJSON!, storeId: ID!): [InventoryItem]\n";
declare const _default: string;
export default _default;
