declare const _default: "\n    type Subscription {\n        onCreateOrder(storeId: ID!): Order\n            @aws_subscribe(mutations: [\"createOrder\"])\n\n        onUpdateInventoryItemStock(id: ID!): InventoryItem\n            @aws_subscribe(mutations: [\"updateStock\"])\n    }\n";
export default _default;
