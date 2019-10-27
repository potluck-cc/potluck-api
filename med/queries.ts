export default `
    type Query {
        listDoctors(
            filter: TableDoctorFilterInput
            limit: Int
            nextToken: String
        ): DoctorConnection

        getDoctorsByCounty(metadata: String!, nextToken: String): DoctorConnection

        getDoctor(id: ID!): Doctor

        getUser(id: ID!): User

        getAppointment(id: ID!): Appointment

        getAppointmentsByPatient(
            patientId: ID!
            filter: TableAppointmentFilterInput
        ): AppointmentConnection

        getAppointmentsByDoctor(
            doctorId: ID!
            from: AWSTimestamp!
            to: AWSTimestamp!
            filter: TableAppointmentFilterInput
        ): AppointmentConnection

        getConversation(id: ID!, filter: TableConversationFilterInput): Conversation

        getConversationsByDoctor(
            doctorId: ID!
            filter: TableConversationFilterInput
        ): ConversationConnection

        getConversationsByPatient(
            patientId: ID!
            filter: TableConversationFilterInput
        ): ConversationConnection

        getMessagesFromAConversation(
            conversationId: ID!
            filter: TableMessageFilterInput
            sortDirection: SortDirection
            startFromTime: Int
            limit: Int
            nextToken: String
        ): MessageConnection
    }
`;
