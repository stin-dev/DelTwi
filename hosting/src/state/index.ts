import DI from "../DIContainer";
import { SignInContainer } from "./SignIn";
import { HomeContainer } from "./Home";

export const signIn = new SignInContainer(DI.SignInService);
export const home = new HomeContainer(DI.CloudFunctionsService);


export {
  SignInContainer,
  HomeContainer,
};
