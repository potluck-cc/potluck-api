export declare const fields = "\n        createAppointment(input: CreateAppointmentInput): Appointment\n            @aws_auth(cognito_groups: [\"Doctor\"])\n\n        updateAppointment(input: UpdateAppointmentInput): Appointment\n\n        createMessage(input: CreateMessageInput): Message\n\n        createConversation(input: CreateConversationInput): Conversation\n\n        updateConversation(input: UpdateConversationInput): Conversation\n\n        createUser(input: CreateUserInput!): User\n\n        updateUser(input: UpdateUserInput!): User\n\n        updateDoctor(input: UpdateDoctorInput!): Doctor\n            @aws_auth(cognito_groups: [\"Doctor\"])\n";
declare const _default: string;
export default _default;
