export const fields = `
        createAppointment(input: CreateAppointmentInput): Appointment
            @aws_auth(cognito_groups: ["Doctor"])

        updateAppointment(input: UpdateAppointmentInput): Appointment

        createMessage(input: CreateMessageInput): Message

        createConversation(input: CreateConversationInput): Conversation

        updateConversation(input: UpdateConversationInput): Conversation

        createUser(input: CreateUserInput!): User

        updateUser(input: UpdateUserInput!): User

        updateDoctor(input: UpdateDoctorInput!): Doctor
            @aws_auth(cognito_groups: ["Doctor"])
`;

export default `
    type Mutation {
        ${fields}
    }
`;
