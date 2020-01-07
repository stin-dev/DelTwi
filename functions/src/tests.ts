import "reflect-metadata";
import * as Twitter from "twitter";
import * as Services from "./services";

const apiKey = "bhOGoNhefmzkvhpCe5U5zPaiZ";
const apiSecret = "WOsjU4wHM0AlFee7HnVNOU0h8CfNxjiUUvoXMlIm5pv3kCk8fn";
const accessToken = "1408004990-1wMqfUKG1DhsBIxyIeSzroSa1fZQY7d5mcPPicH";
const accessSecret = "6oqu6Z1y9ZovW84Ff52H8oMzfjZ9qQvdpg411JarqnoJF";

const twitter = new Twitter({
  consumer_key: apiKey,
  consumer_secret: apiSecret,
  access_token_key: accessToken,
  access_token_secret: accessSecret,
});

const test = async () => {
  const service = new Services.StatuesService(twitter);

  const tweet = await service.destroy("1212805052299018241");

  console.log(`tweet count: ${tweet.id_str}`)
}

test();