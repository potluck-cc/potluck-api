export default `
    type Subscription {
        onUpdateConversation(patientId: ID, doctorId: ID): Conversation
            @aws_subscribe(mutations: ["updateConversation"])

        onCreateMessage(conversationId: ID): Message
            @aws_subscribe(mutations: ["createMessage"])
    }
`;
