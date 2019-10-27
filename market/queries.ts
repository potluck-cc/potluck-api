export default `
    type Query {
        getDoctor(id: ID!): Doctor @aws_cognito_user_pools

        getUser(id: ID!): User @aws_cognito_user_pools

        listStores(
            filter: TableStoreFilterInput
            limit: Int
            nextToken: String
        ): StoreConnection @aws_api_key @aws_cognito_user_pools
    }
`;
