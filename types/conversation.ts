const types = `
    type Conversation {
        id: ID!
        createdAt: AWSTimestamp
        updatedAt: AWSTimestamp
        patient: User!
        doctor: Doctor!
        patientId: ID!
        doctorId: ID!
        didDoctorRead: Boolean
        didPatientRead: Boolean
        messages(
            filter: TableMessageFilterInput
            sortDirection: SortDirection
            startFromTime: Int
            limit: Int
            nextToken: String
        ): MessageConnection
    }

    type ConversationConnection {
        items: [Conversation]
        nextToken: String
    }
`;

const inputs = `
    input CreateConversationInput {
        createdAt: AWSTimestamp
        updatedAt: AWSTimestamp
        patientId: ID!
        doctorId: ID!
        patient: AWSJSON!
        doctor: AWSJSON!
        didDoctorRead: Boolean
        didPatientRead: Boolean
    }

    input UpdateConversationInput {
        id: ID!
        updatedAt: AWSTimestamp
        didDoctorRead: Boolean
        didPatientRead: Boolean
    }

    input TableConversationFilterInput {
        id: TableIDFilterInput
        doctorId: TableIDFilterInput
        patientId: TableIDFilterInput
    }   
`;

export const conversation = "".concat(types, inputs);
