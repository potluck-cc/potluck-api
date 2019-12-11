import {
  appointment,
  store,
  inventoryItem,
  product,
  timeblock,
  conversation,
  doctor,
  driver,
  geolocation,
  message,
  user,
  order
} from "../types";
import {
  productType,
  strainType,
  weightOptions,
  state,
  day,
  appointmentStatus,
  county,
  orderStatus,
  sortDirection
} from "../enums";
import { fields as devMutations } from "./mutations";
import { fields as devQueries } from "./queries";
import { fields as enterpriseMutations } from "../enterprise/mutations";
import { fields as enterpriseQueries } from "../enterprise/queries";
import { fields as marketMutations } from "../market/mutations";
import { fields as marketQueries } from "../market/queries";
import { fields as medMutations } from "../med/mutations";
import { fields as medQueries } from "../med/queries";
import { fields as medSubscriptions } from "../med/subscriptions";
import { buildSchema } from "../utility";

const schema = `
    type Query {
        ${enterpriseQueries}
        ${marketQueries}
        ${devQueries}
    } 

    type Mutation {
        ${enterpriseMutations}
        ${marketMutations}
        ${devMutations}
    }

    schema {
      query: Query
      mutation: Mutation
      # subscription: Subscription
    }
`;

const devSchema = [
  appointment,
  store,
  inventoryItem,
  product,
  timeblock,
  conversation,
  doctor,
  driver,
  geolocation,
  message,
  user,
  order,
  productType,
  strainType,
  weightOptions,
  state,
  day,
  appointmentStatus,
  county,
  orderStatus,
  sortDirection,
  schema
];

buildSchema({
  typeDefinitions: devSchema,
  targetLocation: "./dev",
  fileName: "schema.graphql"
});
