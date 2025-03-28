import { Client, Account, Databases, ID } from "react-native-appwrite";

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('67ded22f0002b10dfd7e'); 

export const account = new Account(client);
export const databases = new Databases(client);
export const ID_APPWRITE = ID;
export const DATABASE_ID = '67ded4e1000e2d7114b9'; 
export const COLLECTION_ID = '67e189c600215bf232ee';