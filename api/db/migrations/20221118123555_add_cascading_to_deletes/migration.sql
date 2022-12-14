-- DropForeignKey
ALTER TABLE "RecommendedOnTopic" DROP CONSTRAINT "RecommendedOnTopic_recommended_id_fkey";

-- DropForeignKey
ALTER TABLE "RecommendedOnTopic" DROP CONSTRAINT "RecommendedOnTopic_topic_id_fkey";

-- DropForeignKey
ALTER TABLE "SubredditsOnTopic" DROP CONSTRAINT "SubredditsOnTopic_subreddit_id_fkey";

-- DropForeignKey
ALTER TABLE "SubredditsOnTopic" DROP CONSTRAINT "SubredditsOnTopic_topic_id_fkey";

-- AddForeignKey
ALTER TABLE "RecommendedOnTopic" ADD CONSTRAINT "RecommendedOnTopic_recommended_id_fkey" FOREIGN KEY ("recommended_id") REFERENCES "RedditMessages"("reddit_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecommendedOnTopic" ADD CONSTRAINT "RecommendedOnTopic_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubredditsOnTopic" ADD CONSTRAINT "SubredditsOnTopic_subreddit_id_fkey" FOREIGN KEY ("subreddit_id") REFERENCES "Subreddit"("ext_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubredditsOnTopic" ADD CONSTRAINT "SubredditsOnTopic_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;
