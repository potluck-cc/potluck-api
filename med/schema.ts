import { buildSchema } from "../utility";
import { doctor, appointment, user, conversation, message } from "../types";
import { state, county, appointmentStatus, sortDirection } from "../enums";
import mutations from "./mutations";
import queries from "./queries";
import subscriptions from "./subscriptions";

const schema = `
    schema {
      query: Query
      mutation: Mutation
      subscription: Subscription
    }
`;

const medSchema = [
  county,
  state,
  appointmentStatus,
  sortDirection,
  doctor,
  appointment,
  user,
  conversation,
  message,
  mutations,
  queries,
  subscriptions,
  schema
];

buildSchema({
  typeDefinitions: medSchema,
  targetLocation: "./med",
  fileName: "schema.graphql"
});
