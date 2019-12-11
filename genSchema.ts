import { readdir, stat } from "fs";
import { resolve } from "path";
import { exec } from "child_process";

function generateListOfSchemaJSFiles(directory = process.env.PWD, onComplete) {
  readdir(directory, (err, list) => {
    if (err) console.log(err);

    list.forEach(file => {
      file = resolve(directory, file);

      if (!file.includes("node_modules")) {
        stat(file, (err, stat) => {
          if (err) console.log(err);

          if (stat && stat.isDirectory()) {
            generateListOfSchemaJSFiles(file, onComplete);
          } else {
            if (file.includes("schema.js") && !file.includes(".map")) {
              onComplete(file);
            }
          }
        });
      }
    });
  });
}

generateListOfSchemaJSFiles(undefined, async file => {
  await exec(`node ${file}`, error => {
    console.log(`Generating GraphQL Schema @ ${file}`);
    if (error !== null) {
      console.log("error:" + error);
    }
  });
});
