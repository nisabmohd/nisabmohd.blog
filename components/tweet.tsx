import { Suspense } from "react";
import { unstable_cache } from "next/cache";
import { TweetSkeleton, EmbeddedTweet, TweetNotFound } from "react-tweet";
import { getTweet as _getTweet } from "react-tweet/api";

type TweetData = NonNullable<Awaited<ReturnType<typeof _getTweet>>>;

// The syndication API sometimes omits entity arrays, which react-tweet iterates while rendering.
function withEntities<T extends Pick<TweetData, "entities">>(tweet: T): T {
  const e = tweet.entities ?? {};
  tweet.entities = {
    ...e,
    hashtags: e.hashtags ?? [],
    user_mentions: e.user_mentions ?? [],
    urls: e.urls ?? [],
    symbols: e.symbols ?? [],
  };
  return tweet;
}

const getTweet = unstable_cache(
  async (id: string) => {
    const tweet = await _getTweet(id);
    if (tweet) {
      withEntities(tweet);
      if (tweet.quoted_tweet) withEntities(tweet.quoted_tweet);
    }
    return tweet;
  },
  ["tweet-v2"],
  { revalidate: 3600 * 24 }
);

const TweetComponent = async ({ id }: { id: string }) => {
  try {
    const tweet = await getTweet(id);
    return tweet ? <EmbeddedTweet tweet={tweet} /> : <TweetNotFound />;
  } catch (error) {
    console.error(error);
    return <TweetNotFound error={error} />;
  }
};

export const Tweet = ({ id }: { id: string }) => (
  <Suspense fallback={<TweetSkeleton />}>
    <TweetComponent id={id} />
  </Suspense>
);
