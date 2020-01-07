import * as Twitter from "twitter";
import { injectable } from "tsyringe";
import { Tweet } from "../TweetObject";

@injectable()
export class TimelinesService {
  constructor(private twitter: Twitter) { }

  userTimeline = async (maxId?: string) => {
    const response = await this.twitter.get(
      "statuses/user_timeline",
      {
        include_rts: true,
        count: 200,
        max_id: maxId,
      });

    return response as Tweet[];
  }
}
