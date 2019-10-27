export default `
    type Mutation {
        createDoctor(input: CreateDoctorInput!): Doctor
            @aws_auth(cognito_groups: ["Doctor"])

        updateDoctor(input: UpdateDoctorInput!): Doctor
            @aws_auth(cognito_groups: ["Doctor"])

        createUser(input: CreateUserInput!): User @aws_cognito_user_pools

        updateUser(input: UpdateUserInput!): User @aws_cognito_user_pools
    }
`;
