import * as Twitter from "twitter";
import { injectable } from "tsyringe";
import { Tweet } from "../TweetObject";

@injectable()
export class StatuesService {
  constructor(private twitter: Twitter) { }

  update = async (params: Twitter.RequestParams) => {
    return await this.twitter.post("statuses/update", params) as Tweet;
  }

  destroy = async (tweetId: string) => {
    return await this.twitter.post(`statuses/destroy/${tweetId}`, {}) as Tweet;
  }
}
