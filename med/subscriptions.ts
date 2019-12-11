export const fields = `
        onUpdateConversation(patientId: ID, doctorId: ID): Conversation
            @aws_subscribe(mutations: ["updateConversation"])

        onCreateMessage(conversationId: ID): Message
            @aws_subscribe(mutations: ["createMessage"])
`;

export default `
    type Subscription {
        ${fields}
    }
`;
