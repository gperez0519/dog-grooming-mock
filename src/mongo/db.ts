import mongoose, { Mongoose } from "mongoose";

let mongoDBConnection: Promise<Mongoose>;

export const dbConnect = async (dbName: string) => {
  try {
    if (await mongoDBConnection) return { mongoDBConnection };
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

      mongoDBConnection = Promise.resolve(mongoose.connect(MONGODB_API_URL));
      console.log("Initial connection to the MongoDB database");

      return { mongoDBConnection };
    }
  } catch (error) {
    console.error(
      "Error occurred while attempting to connect to the database: ",
      error
    );
  }
};
