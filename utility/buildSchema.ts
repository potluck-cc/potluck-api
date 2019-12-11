import { writeFile } from "fs";
import { join } from "path";
import { chdir } from "process";

const baseSchema = `
  input TableBooleanFilterInput {
    eq: Boolean
    ne: Boolean
  }

  input TableFloatFilterInput {
    between: [Float]
    contains: Float
    eq: Float
    ge: Float
    gt: Float
    le: Float
    lt: Float
    ne: Float
    notContains: Float
  }

  input TableIDFilterInput {
    beginsWith: ID
    between: [ID]
    contains: ID
    eq: ID
    ge: ID
    gt: ID
    le: ID
    lt: ID
    ne: ID
    notContains: ID
  }

  input TableIntFilterInput {
    between: [Int]
    contains: Int
    eq: Int
    ge: Int
    gt: Int
    le: Int
    lt: Int
    ne: Int
    notContains: Int
  }

  input TableStringFilterInput {
    beginsWith: String
    between: [String]
    contains: String
    eq: String
    ge: String
    gt: String
    le: String
    lt: String
    ne: String
    notContains: String
  }
`;

export function buildSchema({
  typeDefinitions,
  targetLocation,
  fileName
}: {
  typeDefinitions: string[];
  targetLocation: string;
  fileName: string;
}) {
  chdir("/Users/ashtonmorris/Desktop/potluck/potluck-api/");

  writeFile(
    join(targetLocation, fileName),
    baseSchema.concat(...typeDefinitions),
    err => (err ? console.log(err) : "The file was saved!")
  );
}
