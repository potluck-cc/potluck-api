import { buildSchema } from "../utility";
import { store, inventoryItem, product, timeblock } from "../types";
import { productType, strainType, weightOptions, state, day } from "../enums";
import mutations from "./mutations";
import queries from "./queries";

const schema = `
    schema {
      query: Query
      mutation: Mutation
      #   subscription: Subscription
    }
`;

const enterpriseSchema = [
  store,
  inventoryItem,
  product,
  productType,
  strainType,
  weightOptions,
  state,
  day,
  timeblock,
  mutations,
  queries,
  schema
];

buildSchema({
  typeDefinitions: enterpriseSchema,
  targetLocation: "./enterprise",
  fileName: "schema.graphql"
});
