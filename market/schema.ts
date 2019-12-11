import { buildSchema } from "../utility";
import {
  generateDoctor,
  generateStore,
  generateProduct,
  generateInventoryItem,
  generateUser,
  generateTimeblock,
  order,
  geolocation
} from "../types";
import {
  county,
  state,
  day,
  productType,
  strainType,
  weightOptions,
  orderStatus
} from "../enums";
import mutations from "./mutations";
import queries from "./queries";

const schema = `
    schema {
      query: Query
      mutation: Mutation
    }
`;

const marketSchema = [
  county,
  state,
  day,
  productType,
  strainType,
  geolocation,
  weightOptions,
  order,
  orderStatus,
  generateDoctor("@aws_api_key @aws_cognito_user_pools"),
  generateStore("@aws_api_key @aws_cognito_user_pools"),
  generateProduct("@aws_api_key @aws_cognito_user_pools"),
  generateInventoryItem("@aws_api_key @aws_cognito_user_pools"),
  generateUser("@aws_api_key @aws_cognito_user_pools"),
  generateTimeblock("@aws_api_key @aws_cognito_user_pools"),
  mutations,
  queries,
  schema
];

buildSchema({
  typeDefinitions: marketSchema,
  targetLocation: "./market",
  fileName: "schema.graphql"
});
