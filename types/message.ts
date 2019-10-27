const types = `
    type Message {
        id: ID!
        text: String!
        #  The id of the Conversation this message belongs to. This is the table primary key.
        conversationId: ID!
        #  The message timestamp. This is also the table sort key.
        createdAt: AWSTimestamp
        isSent: Boolean
        sender: String
    }

    type MessageConnection {
        items: [Message]
        nextToken: String
    }
`;

const inputs = `
    input CreateMessageInput {
        conversationId: ID!
        createdAt: AWSTimestamp
        sender: String
        isSent: Boolean
        text: String!
        patientId: ID!
        doctorId: ID!
    }

    input TableMessageFilterInput {
        conversationId: TableIDFilterInput
        createdAt: TableIntFilterInput
        sender: TableStringFilterInput
        isSent: TableBooleanFilterInput
        text: TableStringFilterInput
    }
`;

export const message = "".concat(types, inputs);
