/*
  Warnings:

  - You are about to drop the `subreddit` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SubredditsOnTopic" DROP CONSTRAINT "SubredditsOnTopic_subreddit_id_fkey";

-- DropTable
DROP TABLE "subreddit";

-- CreateTable
CREATE TABLE "RedditMessages" (
    "id" SERIAL NOT NULL,
    "reddit_id" VARCHAR,
    "channel_id" VARCHAR,
    "channel_name" VARCHAR,
    "title" VARCHAR,
    "self_text" VARCHAR,
    "url" VARCHAR,
    "score" INTEGER,

    CONSTRAINT "RedditMessages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subreddit" (
    "id" SERIAL NOT NULL,
    "channel_name" VARCHAR,
    "ext_id" VARCHAR,
    "search_name" VARCHAR,

    CONSTRAINT "Subreddit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ix_RedditMessages_id" ON "RedditMessages"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Subreddit_ext_id_key" ON "Subreddit"("ext_id");

-- CreateIndex
CREATE INDEX "ix_Subreddit_id" ON "Subreddit"("id");

-- AddForeignKey
ALTER TABLE "SubredditsOnTopic" ADD CONSTRAINT "SubredditsOnTopic_subreddit_id_fkey" FOREIGN KEY ("subreddit_id") REFERENCES "Subreddit"("ext_id") ON DELETE RESTRICT ON UPDATE CASCADE;
