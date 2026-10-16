import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const MONGO_DB_URI = process.env.MONGO_DB_URI;
const AUTH_DB_NAME = process.env.AUTH_DB_NAME || "hireloop_db";

if (!MONGO_DB_URI) {
  throw new Error(
    "Missing MONGO_DB_URI. Copy .env.example to .env and set your MongoDB connection string."
  );
}

// Reuse one client across dev hot-reloads instead of leaking a pool per reload.
const globalForMongo = globalThis;

function getMongoClient() {
  if (!globalForMongo._mongoClient) {
    globalForMongo._mongoClient = new MongoClient(MONGO_DB_URI, {
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 5000,
    });
  }
  return globalForMongo._mongoClient;
}

const client = getMongoClient();
const db = client.db(AUTH_DB_NAME);

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: mongodbAdapter(db, {
    client,
  }),
});
