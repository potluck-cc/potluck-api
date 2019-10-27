const types = `
    type Appointment {
        id: ID!
        doctor: Doctor!
        patient: User!
        doctorId: ID!
        patientId: ID!
        createdAt: AWSTimestamp!
        updatedAt: AWSTimestamp
        status: AppointmentStatus!
        date: AWSTimestamp!
    }

    type AppointmentConnection {
        items: [Appointment]
        nextToken: String
    }
`;

const inputs = `
    input CreateAppointmentInput {
        doctor: AWSJSON!
        patient: AWSJSON!
        createdAt: AWSTimestamp!
        updatedAt: AWSTimestamp
        status: AppointmentStatus!
        date: AWSTimestamp
        doctorId: ID!
        patientId: ID!
    }

    input TableAppointmentFilterInput {
        doctor: TableStringFilterInput
        patient: TableStringFilterInput
        status: TableStringFilterInput
        date: TableIntFilterInput
        doctorId: TableStringFilterInput
        patientID: TableStringFilterInput
    }

    input UpdateAppointmentInput {
        id: ID!
        status: AppointmentStatus
    }
`;

export const appointment = "".concat(types, inputs);
