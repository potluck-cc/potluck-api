const userFields = `
        id: ID!
        confirmed: Boolean
        firstname: String
        lastname: String
        street: String
        city: String
        state: State
        patientID: String
        expiration: String
        email: AWSEmail
        phone: AWSPhone
        marketToken: String
        medToken: String
        stateId: String
        medCard: String
        marketWebToken: String
`;

const types = `
    type User {
        ${userFields}
    }
`;

const inputs = `
    input CreateUserInput {
        id: ID!
        confirmed: Boolean
        firstname: String
        lastname: String
        patientID: String
        expiration: String
        email: AWSEmail
        phone: AWSPhone
        dob: String
        issued: String
        street: String
        city: String
        state: State
        marketToken: String
        medToken: String
        stateId: String
        medCard: String
        marketWebToken: String
    }

    input UpdateUserInput {
        id: ID!
        confirmed: Boolean
        firstname: String
        lastname: String
        patientID: String
        expiration: String
        email: AWSEmail
        phone: AWSPhone
        dob: String
        issued: String
        street: String
        city: String
        state: State
        marketToken: String
        medToken: String
        stateId: String
        medCard: String
        marketWebToken: String
    }
`;

export function generateUser(authorizationType: string) {
  return `
    type User ${authorizationType} {
        ${userFields}
    }

    ${inputs}
    `;
}

export const user = "".concat(types, inputs);
