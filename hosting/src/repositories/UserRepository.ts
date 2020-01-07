import { User } from "../entities/User";
import firebase from "../firebase";

export class UserRepository {
  private collection = firebase.firestore().collection("users");

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
    await doc.set(user);
  }
}