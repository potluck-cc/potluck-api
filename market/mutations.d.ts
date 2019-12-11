export declare const fields = "\n       createDoctor(input: CreateDoctorInput!): Doctor\n            @aws_auth(cognito_groups: [\"Doctor\"])\n\n        updateDoctor(input: UpdateDoctorInput!): Doctor\n            @aws_auth(cognito_groups: [\"Doctor\"])\n\n        createUser(input: CreateUserInput!): User @aws_cognito_user_pools\n\n        updateUser(input: UpdateUserInput!): User @aws_cognito_user_pools\n\n        createOrder(input: CreateOrderInput): Order\n\n        updateStock(input: UpdateStockInput!): InventoryItem\n";
declare const _default: string;
export default _default;
