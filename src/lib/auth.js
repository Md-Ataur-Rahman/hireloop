import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient("mongodb+srv://test-hireloop-user:2z62MA3AtT7PDNQ5@cluster0.va4kkev.mongodb.net/?appName=Cluster0");
const db = client.db("hireloop_db");

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: mongodbAdapter(db, {
    client,
  }),
});
