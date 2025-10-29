import { config } from 'dotenv';
import dotenv from "dotenv";


config({ path: `.env.${process.env.NODE_ENV || 'development'}.local`});
dotenv.config();

export const { PORT,NODE_ENV,DB_URI,JWT_SECRET,JWT_EXPIRES_IN,ARCJET_ENV,ARCJET_KEY,QSTASH_TOKEN,QSTASH_URL,EMAIL_PASSWORD,EMAIL_USER} = process.env;