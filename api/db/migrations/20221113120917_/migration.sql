/*
  Warnings:

  - A unique constraint covering the columns `[reddit_id]` on the table `RedditMessages` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "RecommendedOnTopic" DROP CONSTRAINT "RecommendedOnTopic_recommended_id_fkey";

-- AlterTable
ALTER TABLE "RecommendedOnTopic" ALTER COLUMN "recommended_id" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "RedditMessages_reddit_id_key" ON "RedditMessages"("reddit_id");

-- AddForeignKey
ALTER TABLE "RecommendedOnTopic" ADD CONSTRAINT "RecommendedOnTopic_recommended_id_fkey" FOREIGN KEY ("recommended_id") REFERENCES "RedditMessages"("reddit_id") ON DELETE RESTRICT ON UPDATE CASCADE;
