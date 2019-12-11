import { buildSchema } from "../utility";
import {
  store,
  generateGeolocation,
  generateInventoryItem,
  timeblock,
  generateProduct,
  generateUser,
  generateOrder
} from "../types";
import {
  productType,
  strainType,
  weightOptions,
  state,
  day,
  orderStatus
} from "../enums";
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

const enterpriseSchema = [
  store,
  generateInventoryItem("@aws_cognito_user_pools"),
  generateProduct("@aws_cognito_user_pools"),
  productType,
  strainType,
  weightOptions,
  state,
  day,
  timeblock,
  generateOrder("@aws_cognito_user_pools"),
  orderStatus,
  generateUser("@aws_cognito_user_pools"),
  generateGeolocation("@aws_cognito_user_pools"),
  mutations,
  queries,
  subscriptions,
  schema
];

buildSchema({
  typeDefinitions: enterpriseSchema,
  targetLocation: "./enterprise",
  fileName: "schema.graphql"
});
