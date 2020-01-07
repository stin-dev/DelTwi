import firebase from "../firebase";
import { Tweet } from "../entities/TweetObject";

export class CloudFunctionsService {
  constructor() { }

  helloWorld = async (name: string): Promise<string> => {
    const func = firebase.functions().httpsCallable('helloWorld');
    const result = await func({ name: name });
    return result.data;
  }

  getTimeline = async (maxId?: string): Promise<Tweet[]> => {
    const func = firebase.functions().httpsCallable('getTimeline');
    const result = await func({ maxId: maxId });
    return result.data;
  }
}
