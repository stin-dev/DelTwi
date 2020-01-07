import firebase from "../firebase";
import { UserRepository } from "../repositories";
import { AppUser } from "../entities/AppUser";

export class SignInService {
  constructor(private userRepository: UserRepository) { }

  onAuthStateChanged = (observer: (user: AppUser | null) => void) => {
    firebase.auth().onAuthStateChanged(async u => {
      if (u) {
        const additionalInfo = await this.userRepository.findById(u.uid);
        if (additionalInfo) {
          observer({ info: u, additionalInfo: additionalInfo });
        }
      } else {
        observer(null);
      }
    });
  }

  signInWithTwitter = async () => {
    const provider = new firebase.auth.TwitterAuthProvider();
    const userCredential = await firebase.auth().signInWithPopup(provider);
    if (userCredential.user) {
      const oauth = userCredential.credential as firebase.auth.OAuthCredential;
      await this.userRepository.register({
        uid: userCredential.user.uid,
        screenName: userCredential.additionalUserInfo?.username as string,
        accessToken: oauth.accessToken as string,
        secret: oauth.secret as string,
      });
    }
  }

  signOut = async () => {
    await firebase.auth().signOut();
  }
}