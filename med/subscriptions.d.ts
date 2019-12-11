export declare const fields = "\n        onUpdateConversation(patientId: ID, doctorId: ID): Conversation\n            @aws_subscribe(mutations: [\"updateConversation\"])\n\n        onCreateMessage(conversationId: ID): Message\n            @aws_subscribe(mutations: [\"createMessage\"])\n";
declare const _default: string;
export default _default;
