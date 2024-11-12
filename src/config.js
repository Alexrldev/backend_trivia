import { config } from "dotenv";
config();

export const PUERTO=process.env.PUERTO;
export const TOKEN_SECRET=process.env.TOKEN_SECRET;
export const MONGO_URI=process.env.MONGO_URI