import { injectable } from "tsyringe";
import { StatuesService } from "./StatusesService";

@injectable()
export class DeleteTweetsService {
  constructor(private statusesService: StatuesService) { }

  deleteTweets = async (tweetIds: string[]) => {
    const promises = tweetIds.map(id => this.statusesService.destroy(id));
    return await Promise.all(promises);
  }
}