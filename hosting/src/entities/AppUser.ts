import firebase from "../firebase";
import { User } from "./User";

export interface AppUser {
  info: firebase.User,
  additionalInfo: User,
}