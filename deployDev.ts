import { chdir } from "process";
import { exec } from "child_process";

async function deployDev() {
  try {
    await chdir("./dev");

    await exec("sls deploy", error => {
      if (error) {
        console.log(error);
      }
    });
  } catch (err) {
    console.log(err);
  }
}

deployDev();
