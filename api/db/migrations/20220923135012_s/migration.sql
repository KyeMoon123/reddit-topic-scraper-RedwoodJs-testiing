/*
  Warnings:

  - You are about to drop the `_SubredditToTopic` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_SubredditToTopic" DROP CONSTRAINT "_SubredditToTopic_A_fkey";

-- DropForeignKey
ALTER TABLE "_SubredditToTopic" DROP CONSTRAINT "_SubredditToTopic_B_fkey";

-- DropTable
DROP TABLE "_SubredditToTopic";

-- CreateTable
CREATE TABLE "SubredditsOnTopic" (
    "id" SERIAL NOT NULL,
    "topicId" INTEGER NOT NULL,
    "subredditId" INTEGER NOT NULL,

    CONSTRAINT "SubredditsOnTopic_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SubredditsOnTopic_topicId_subredditId_key" ON "SubredditsOnTopic"("topicId", "subredditId");

-- AddForeignKey
ALTER TABLE "SubredditsOnTopic" ADD CONSTRAINT "SubredditsOnTopic_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubredditsOnTopic" ADD CONSTRAINT "SubredditsOnTopic_subredditId_fkey" FOREIGN KEY ("subredditId") REFERENCES "Subreddit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
