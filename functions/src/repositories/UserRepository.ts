import * as admin from "firebase-admin";
import { injectable } from "tsyringe";
import { User } from "../entities";

@injectable()
export class UserRepository {
  private collection = admin.firestore().collection("users");

  constructor() { }

  findById = async (id: string) => {
    const doc = this.collection.doc(id);
    const snapshot = await doc.get();
    const data = snapshot.data();
    if (data) {
      return data as User;
    } else {
      return undefined;
    }
  }

  register = async (user: User) => {
    const doc = this.collection.doc(user.uid);
    const writeResult = await doc.set(user);
    return writeResult.writeTime.toDate();
  }
}