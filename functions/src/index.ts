import "reflect-metadata";
import * as functions from 'firebase-functions';
import * as Controllers from "./controllers";
import { HttpsError } from "firebase-functions/lib/providers/https";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onCall((data, context) => {
  if (!data.name) { throw new HttpsError("invalid-argument", "'name' argument is required.") }
  const name: string = data.name;

  return `Hello ${name}!`;
});

export const getTimeline = functions.https.onCall(Controllers.getTimeline);