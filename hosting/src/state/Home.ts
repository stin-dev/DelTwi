import { Container } from "unstated";
import { CloudFunctionsService } from "../services";
import { Tweet } from "../entities/TweetObject";

interface HomeState {
  tweets: {
    tweet: Tweet,
    checked: boolean,
  }[],
  testLog: string,
}

export class HomeContainer extends Container<HomeState> {
  constructor(
    private cloudFunctionsService: CloudFunctionsService,
  ) {
    super();

    this.state = { tweets: [], testLog: "" };
  }

  getNextTimeline = async (): Promise<void> => {

  }

  setTextAtRandom = async () => {
    const hello = await this.cloudFunctionsService.helloWorld("atRandom")
    this.setState({ testLog: hello });
  }
}