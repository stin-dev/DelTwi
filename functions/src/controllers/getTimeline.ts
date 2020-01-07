import * as functions from 'firebase-functions';
import { container } from 'tsyringe';
import { resolveTwitter } from './resolveTwitter';
import { TimelinesService } from '../services';

export default async (data: any, context: functions.https.CallableContext) => {
  const uid = context.auth?.uid;

  if (!uid) {
    throw new functions.https.HttpsError("unauthenticated", "sign in required.");
  }

  await resolveTwitter(uid);

  const timelinesService = container.resolve(TimelinesService);
  return await timelinesService.userTimeline(data.maxId);
}