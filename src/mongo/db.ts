import mongoose from "mongoose";

let alreadyConnected: boolean = false;

export const dbConnect = async (dbName: string) => {
  let message = alreadyConnected ? "Already connected to DB" : "";

  if (!alreadyConnected) {
    let MONGODB_API_ENV_URL = "";
    let APPENDED_QUERY_URI = "";

    // Check which environment we are in and use the relevant mongodb instance.
    switch (process.env.NODE_ENV) {
      case "development":
        MONGODB_API_ENV_URL = process.env.MONGODB_API_URL || ""; // LOCAL
        break;
      case "production":
        MONGODB_API_ENV_URL = process.env.NEXT_PUBLIC_MONGODB_API || ""; // PRODUCTION
        APPENDED_QUERY_URI = "?retryWrites=true&w=majority";
      default:
        break;
    }

    // Connect to the database with compiled MongoDB database URL
    if (MONGODB_API_ENV_URL) {
      let MONGODB_API_URL = `${MONGODB_API_ENV_URL}/${dbName}${APPENDED_QUERY_URI}`;

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
