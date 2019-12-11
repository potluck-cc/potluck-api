const orderFields = `
        id: ID!
        store: Store!
        customer: User!
        expectedCompletionDate: AWSTimestamp!
        createdAt: AWSTimestamp!
        status: OrderStatus!
        products: [OrderItem]!
        storeId: ID!
        customerId: ID!
        companyId: ID!
        discount: Float
        subtotal: Float!
        total: Float!
        tax: Float
        discountDisplayValue: String
        subtotalDisplayValue: String!
        taxDisplayValue: String
        totalDisplayValue: String!
        delivery: Boolean
        pickup: Boolean!
        pos: Boolean
        code: String!
       # driver: Driver
       # deliveryStatus: DeliveryStatus
       # dispensaryMessage: String
`;

const orderItemFields = `
        item: InventoryItem!
        quantity: Int!
        option: Option
        requestedGrams: Float
`;

const types = `
    type Order {
        ${orderFields}
    }

    type OrderItem {
        ${orderItemFields}
    }

    type OrderConnection {
        items: [Order]
        nextToken: String
    }
`;

const inputs = `
    input CreateOrderInput {
        store: AWSJSON!
        customer: AWSJSON!
        total: Float!
        expectedCompletionDate: AWSTimestamp!
        createdAt: AWSTimestamp!
        status: OrderStatus!
        products: AWSJSON!
        storeId: ID!
        companyId: ID!
        customerId: ID!
        discount: Float
        subtotal: Float!
        code: String!
        tax: Float
        discountDisplayValue: String
        subtotalDisplayValue: String
        taxDisplayValue: String
        totalDisplayValue: String
        delivery: Boolean
        pickup: Boolean!
        pos: Boolean
        driver: String
        # deliveryStatus: DeliveryStatus
        # dispensaryMessage: String
    }

    input UpdateOrderInput {
        status: OrderStatus
        storeId: ID!
        # driver: String
        # deliveryStatus: DeliveryStatus
        # dispensaryMessage: String
        code: String!
    }

    input TableOrderFilterInput {
        id: TableIDFilterInput
        date: TableStringFilterInput
        status: TableStringFilterInput
        products: TableStringFilterInput
        customer: TableStringFilterInput
        store: TableStringFilterInput
        delivery: TableBooleanFilterInput
        code: TableStringFilterInput
        # driver: TableStringFilterInput
        # deliveryStatus: TableStringFilterInput
    }
`;

export function generateOrder(authorizationType: string) {
  return `
    type Order ${authorizationType} {
        ${orderFields}
    }

    type OrderItem ${authorizationType} {
        ${orderItemFields}
    }

    type OrderConnection {
        items: [Order]
        nextToken: String
    }

    ${inputs}
    `;
}

export const order = "".concat(types, inputs);
