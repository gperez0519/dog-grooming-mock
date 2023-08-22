import mongoose from "mongoose";

let alreadyConnected: boolean = false;

export const dbConnect = async (dbName: string) => {
  let message = alreadyConnected ? "Already connected to DB" : "";
  console.log(process.env.NODE_ENV);
  if (!alreadyConnected) {
    let MONGODB_API_ENV_URL = "";

    // Check which environment we are in and use the relevant mongodb instance.
    switch (process.env.NODE_ENV) {
      case "development":
        console.log("development test case hit");
        MONGODB_API_ENV_URL = process.env.MONGODB_API_URL || ""; // LOCAL
        break;
      case "production":
        console.log("production test case hit");
        MONGODB_API_ENV_URL = process.env.NEXT_PUBLIC_MONGODB_API || ""; // PRODUCTION
      default:
        break;
    }

    if (MONGODB_API_ENV_URL) {
      let MONGODB_API_URL = `${MONGODB_API_ENV_URL}/${dbName}`;
      console.log(MONGODB_API_URL);
      await mongoose
        .connect(MONGODB_API_URL)
        .then(() => {
          message = `Successfully connected to DB`;
          alreadyConnected = true;
        })
        .catch((err) => {
          message = `Error attempting to connect to DB: ${err.message}`;
        });
    }
  }

  return message;
};
