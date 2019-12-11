import { codegen } from "@graphql-codegen/core";
import { loadSchema } from "graphql-toolkit";
import { writeFile } from "fs";
import { join } from "path";
import * as typescriptPlugin from "@graphql-codegen/typescript";
import { printSchema, parse } from "graphql";
import { exec } from "child_process";

const outputFileName = "./@potluckmarket-types/index.ts";

async function genTypes() {
  try {
    const productionSchemas = await loadSchema(
      "./!(dev)!(node_modules)/*.graphql"
    );

    const config = {
      filename: outputFileName,
      schema: parse(printSchema(productionSchemas)),
      plugins: [
        {
          typescript: {}
        }
      ],
      documents: [],
      config: {},
      pluginMap: {
        typescript: typescriptPlugin
      }
    };

    const output = await codegen(config);

    await writeFile(join(__dirname, outputFileName), output, () => {
      console.log("Production Schema types generated!");
    });

    await exec("tsc", error => {
      console.log("Compiling TypeScript file.");
      if (error) {
        console.log(error);
      }
    });
  } catch (err) {
    console.log(err);
  }
}

genTypes();

// "deploy": "sls deploy && npm run genTypes && npm run pubTypes",
