import * as functions from "firebase-functions";
import { container } from "tsyringe";
import * as Twitter from "twitter";
import { UserRepository } from "../repositories";

export const resolveTwitter = async (uid: string) => {
  const consumerKey: string = functions.config().twitter.consumer_key;
  const consumerSecret: string = functions.config().twitter.consumer_secret;

  const userRepository = container.resolve(UserRepository);
  const user = await userRepository.findById(uid);
  if (!user) throw new Error(`Cannot find user:${uid}`);

  container.registerInstance(Twitter, new Twitter({
    consumer_key: consumerKey,
    consumer_secret: consumerSecret,
    access_token_key: user.accessToken,
    access_token_secret: user.secret,
  }));
}