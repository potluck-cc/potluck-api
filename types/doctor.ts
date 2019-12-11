const doctorFields = `
    id: ID!
    address: String!
    county: County!
    metadata: String!
    hours: [String]
    latitude: String!
    longitude: String!
    name: String!
    newPatients: Boolean
    phone: String
    specialty: String!
    receiveChats: Boolean
    bio: String
    image: AWSURL
    insuranceAccpeted: Boolean
    firstVisit: String
    followUp: String
    renewal: String
    bookingFee: String
    visitLength: String
    marketToken: String
    medToken: String
    stateId: String
    medCard: String
    marketWebToken: String
`;

const types = `
    type Doctor {
        ${doctorFields}
    }

    type DoctorConnection {
        items: [Doctor]
        nextToken: String
    }
`;

const inputs = `
    input TableDoctorFilterInput {
        address: TableStringFilterInput
        hours: TableStringFilterInput
        name: TableStringFilterInput
        newPatients: TableBooleanFilterInput
        county: TableStringFilterInput
    }

    input UpdateDoctorInput {
        id: ID!
        address: String
        hours: [String]
        name: String
        phone: String
        receiveChats: Boolean
        bio: String
        image: AWSURL
        firstVisit: String
        followUp: String
        renewal: String
        bookingFee: String
        visitLength: String
        insuranceAccpeted: Boolean
        metadata: String
        marketToken: String
        medToken: String
        stateId: String
        medCard: String
        marketWebToken: String
    }

    input CreateDoctorInput {
        id: String!
        address: String!
        county: String!
        hours: AWSJSON
        latitude: String!
        longitude: String!
        metadata: String!
        name: String!
        newPatients: Boolean!
        phone: String
        specialty: String!
        receiveChats: Boolean
        pricePerVisit: String
        bio: String
        image: AWSURL
        firstVisit: String
        followUp: String
        renewal: String
        bookingFee: String
        visitLength: String
        insuranceAccpeted: Boolean
        marketToken: String
        medToken: String
        stateId: String
        medCard: String
        marketWebToken: String
    }
`;

export function generateDoctor(authorizationType: string) {
  return `
    type Doctor ${authorizationType} {
        ${doctorFields}
    }

    type DoctorConnection ${authorizationType} {
        items: [Doctor]
        nextToken: String
    }

    ${inputs}
    `;
}

export const doctor = "".concat(types, inputs);
