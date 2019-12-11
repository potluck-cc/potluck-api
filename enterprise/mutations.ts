export const fields = `
      createProduct(input: CreateProductInput!): Product
        @aws_auth(cognito_groups: ["Admin", "Dispensaries"])
      createStore(input: CreateStoreInput!): Store
        @aws_auth(cognito_groups: ["Admin", "Dispensaries"])
      updateStore(input: UpdateStoreInput!): Store
        @aws_auth(cognito_groups: ["Admin", "Dispensaries"])
      deleteStore(input: DeleteStoreInput): Store
        @aws_auth(cognito_groups: ["Admin", "Dispensaries"])
      createInventoryItem(input: CreateInventoryItemInput!): InventoryItem
        @aws_auth(cognito_groups: ["Admin", "Dispensaries"])
      updateInventoryItem(input: UpdateInventoryItemInput!): InventoryItem
        @aws_auth(cognito_groups: ["Admin", "Dispensaries"])
      deleteInventoryItem(input: DeleteInventoryItemInput!): InventoryItem
        @aws_auth(cognito_groups: ["Admin", "Dispensaries"])
      updateOrder(input: UpdateOrderInput): Order
        @aws_auth(cognito_groups: ["Admin", "Dispensaries"])
      createOrder(input: CreateOrderInput): Order @aws_cognito_user_pools
      updateStock(input: UpdateStockInput!): InventoryItem
        @aws_auth(cognito_groups: ["Admin", "Dispensaries"])
`;

export default `
    type Mutation {
      ${fields}
    }
`;
