const types = `
    type Driver {
        id: ID!
        firstname: String
        lastname: String
        dob: String
        licenseNumber: String
        licenseIssueDate: String
        licenseExpires: String
        city: String
        state: String
        street: String
        currentLocation: Geolocation
        avatar: AWSURL
        cognitoUsername: String
        phone: AWSPhone
    }

    type DriverConnection {
        items: [Driver]
        nextToken: String
    }
`;

const inputs = `
    input CreateDriverInput {
        firstname: String
        lastname: String
        dob: String
        licenseNumber: String
        licenseIssueDate: String
        licenseExpires: String
        city: String
        state: String
        street: String
        currentLocation: AWSJSON
        avatar: AWSURL
        cognitoUsername: String
        phone: AWSPhone
    }

    input UpdateDriverInput {
        id: ID!
        firstname: String
        lastname: String
        dob: String
        licenseNumber: String
        licenseIssueDate: String
        licenseExpires: String
        city: String
        state: String
        street: String
        currentLocation: AWSJSON
        avatar: AWSURL
        cognitoUsername: String
        phone: AWSPhone
    }

    input TableDriverFilterInput {
        id: TableIDFilterInput
        cognitoUsername: TableStringFilterInput
        phone: TableStringFilterInput
    }
`;

export const driver = "".concat(types, inputs);
