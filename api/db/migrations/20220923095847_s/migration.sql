/*
  Warnings:

  - You are about to drop the `Channel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ChannelToTopic` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ChannelToTopic" DROP CONSTRAINT "_ChannelToTopic_A_fkey";

-- DropForeignKey
ALTER TABLE "_ChannelToTopic" DROP CONSTRAINT "_ChannelToTopic_B_fkey";

-- DropTable
DROP TABLE "Channel";

-- DropTable
DROP TABLE "_ChannelToTopic";

-- CreateTable
CREATE TABLE "Subreddit" (
    "id" SERIAL NOT NULL,
    "channel_name" TEXT NOT NULL,

    CONSTRAINT "Subreddit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_SubredditToTopic" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Subreddit_channel_name_key" ON "Subreddit"("channel_name");

-- CreateIndex
CREATE UNIQUE INDEX "_SubredditToTopic_AB_unique" ON "_SubredditToTopic"("A", "B");

-- CreateIndex
CREATE INDEX "_SubredditToTopic_B_index" ON "_SubredditToTopic"("B");

-- AddForeignKey
ALTER TABLE "_SubredditToTopic" ADD CONSTRAINT "_SubredditToTopic_A_fkey" FOREIGN KEY ("A") REFERENCES "Subreddit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SubredditToTopic" ADD CONSTRAINT "_SubredditToTopic_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;
