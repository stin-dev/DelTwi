import { Container } from "unstated";
import { SignInService } from "../services";
import { AppUser } from "../entities/AppUser";

interface SignInState {
  isLoading: boolean,
  user: AppUser | null,
}

export class SignInContainer extends Container<SignInState> {
  constructor(
    private signInService: SignInService,
  ) {
    super();

    this.state = { isLoading: true, user: null }

    this.signInService.onAuthStateChanged(async user =>
      await this.setState({ isLoading: false, user: user }));
  }

  signIn = async () => {
    try {
      await this.signInService.signInWithTwitter();
    } catch (error) {
      if (error.code === "auth/popup-closed-by-user") { return; }
      console.error(error);
    }
  }

  signOut = async () => {
    await this.signInService.signOut();
  }
}