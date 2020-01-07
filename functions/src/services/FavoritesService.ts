import * as Twitter from "twitter";
import { injectable } from "tsyringe";
import { Tweet } from "../TweetObject";

@injectable()
export class FavoritesService {
  constructor(private twitter: Twitter) { }

  list = async (maxId?: string) => {
    const response = await this.twitter.get(
      "favorites/list",
      {
        count: 200,
        max_id: maxId,
      });

    return response as Tweet[];
  }

  destroy = async (tweetId: string) => {
    const response = await this.twitter.post(
      "favorites/destroy",
      { id: tweetId });

      return response as Tweet;
  }
}
