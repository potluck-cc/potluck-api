export default `
    type Subscription {
        onCreateOrder(storeId: ID!): Order
            @aws_subscribe(mutations: ["createOrder"])

        onUpdateInventoryItemStock(id: ID!): InventoryItem
            @aws_subscribe(mutations: ["updateStock"])
    }
`;
