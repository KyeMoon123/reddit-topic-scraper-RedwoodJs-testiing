/*
  Warnings:

  - You are about to drop the column `channelId` on the `Recommended` table. All the data in the column will be lost.
  - You are about to drop the column `channelName` on the `Recommended` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Recommended` table. All the data in the column will be lost.
  - You are about to drop the column `recommendedId` on the `RecommendedOnTopic` table. All the data in the column will be lost.
  - You are about to drop the column `topicId` on the `RecommendedOnTopic` table. All the data in the column will be lost.
  - You are about to drop the column `subredditId` on the `SubredditsOnTopic` table. All the data in the column will be lost.
  - You are about to drop the column `topicId` on the `SubredditsOnTopic` table. All the data in the column will be lost.
  - You are about to drop the `Subreddit` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[topic_id,recommended_id]` on the table `RecommendedOnTopic` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[topic_id,subreddit_id]` on the table `SubredditsOnTopic` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `channel_id` to the `Recommended` table without a default value. This is not possible if the table is not empty.
  - Added the required column `channel_name` to the `Recommended` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_created` to the `Recommended` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reddit_id` to the `Recommended` table without a default value. This is not possible if the table is not empty.
  - Added the required column `self_text` to the `Recommended` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_recommended` to the `RecommendedOnTopic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `recommended_id` to the `RecommendedOnTopic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `topic_id` to the `RecommendedOnTopic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subreddit_id` to the `SubredditsOnTopic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `topic_id` to the `SubredditsOnTopic` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "RecommendedOnTopic" DROP CONSTRAINT "RecommendedOnTopic_recommendedId_fkey";

-- DropForeignKey
ALTER TABLE "RecommendedOnTopic" DROP CONSTRAINT "RecommendedOnTopic_topicId_fkey";

-- DropForeignKey
ALTER TABLE "SubredditsOnTopic" DROP CONSTRAINT "SubredditsOnTopic_subredditId_fkey";

-- DropForeignKey
ALTER TABLE "SubredditsOnTopic" DROP CONSTRAINT "SubredditsOnTopic_topicId_fkey";

-- DropIndex
DROP INDEX "RecommendedOnTopic_topicId_recommendedId_key";

-- DropIndex
DROP INDEX "SubredditsOnTopic_topicId_subredditId_key";

-- AlterTable
ALTER TABLE "Recommended" DROP COLUMN "channelId",
DROP COLUMN "channelName",
DROP COLUMN "content",
ADD COLUMN     "channel_id" TEXT NOT NULL,
ADD COLUMN     "channel_name" TEXT NOT NULL,
ADD COLUMN     "date_created" TEXT NOT NULL,
ADD COLUMN     "reddit_id" TEXT NOT NULL,
ADD COLUMN     "self_text" TEXT NOT NULL,
ALTER COLUMN "score" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "RecommendedOnTopic" DROP COLUMN "recommendedId",
DROP COLUMN "topicId",
ADD COLUMN     "date_recommended" TEXT NOT NULL,
ADD COLUMN     "recommended_id" INTEGER NOT NULL,
ADD COLUMN     "topic_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "SubredditsOnTopic" DROP COLUMN "subredditId",
DROP COLUMN "topicId",
ADD COLUMN     "subreddit_id" TEXT NOT NULL,
ADD COLUMN     "topic_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Subreddit";

-- CreateTable
CREATE TABLE "subreddit" (
    "id" SERIAL NOT NULL,
    "channel_name" TEXT NOT NULL,
    "ext_id" TEXT NOT NULL,
    "search_name" TEXT NOT NULL,

    CONSTRAINT "subreddit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "subreddit_channel_name_key" ON "subreddit"("channel_name");

-- CreateIndex
CREATE UNIQUE INDEX "subreddit_ext_id_key" ON "subreddit"("ext_id");

-- CreateIndex
CREATE UNIQUE INDEX "subreddit_search_name_key" ON "subreddit"("search_name");

-- CreateIndex
CREATE UNIQUE INDEX "RecommendedOnTopic_topic_id_recommended_id_key" ON "RecommendedOnTopic"("topic_id", "recommended_id");

-- CreateIndex
CREATE UNIQUE INDEX "SubredditsOnTopic_topic_id_subreddit_id_key" ON "SubredditsOnTopic"("topic_id", "subreddit_id");

-- AddForeignKey
ALTER TABLE "SubredditsOnTopic" ADD CONSTRAINT "SubredditsOnTopic_subreddit_id_fkey" FOREIGN KEY ("subreddit_id") REFERENCES "subreddit"("ext_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubredditsOnTopic" ADD CONSTRAINT "SubredditsOnTopic_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecommendedOnTopic" ADD CONSTRAINT "RecommendedOnTopic_recommended_id_fkey" FOREIGN KEY ("recommended_id") REFERENCES "Recommended"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecommendedOnTopic" ADD CONSTRAINT "RecommendedOnTopic_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
