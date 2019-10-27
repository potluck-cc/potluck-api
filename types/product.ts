const productFields = `
    id: ID!
    name: String!
    slug: String!
`;

const types = `
    type Product {
        ${productFields}
    }

    type ProductConnection {
        items: [Product]
        nextToken: String
    }
`;

const inputs = `
    input CreateProductInput {
        name: String!
        slug: String!
    }

    input UpdateProductInput {
        id: ID!
        name: String
        slug: String!
    }

    input ReviewProductInput {
        id: ID!
    }

    input DeleteProductInput {
        id: ID!
        slug: String!
    }

    input TableProductFilterInput {
        description: TableStringFilterInput
        id: TableIDFilterInput
        name: TableStringFilterInput
        slug: TableStringFilterInput
    }
`;

export function generateProduct(authorizationType: string) {
  return `
    type Product ${authorizationType} {
        ${productFields}
    }

    type ProductConnection {
        items: [Product]
        nextToken: String
    }

    ${inputs}
    `;
}

export const product = "".concat(types, inputs);
