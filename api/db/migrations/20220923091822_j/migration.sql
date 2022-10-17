/*
  Warnings:

  - You are about to drop the `Topics` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ChannelsToTopics` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_RecommendedToTopics` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ChannelsToTopics" DROP CONSTRAINT "_ChannelsToTopics_A_fkey";

-- DropForeignKey
ALTER TABLE "_ChannelsToTopics" DROP CONSTRAINT "_ChannelsToTopics_B_fkey";

-- DropForeignKey
ALTER TABLE "_RecommendedToTopics" DROP CONSTRAINT "_RecommendedToTopics_A_fkey";

-- DropForeignKey
ALTER TABLE "_RecommendedToTopics" DROP CONSTRAINT "_RecommendedToTopics_B_fkey";

-- DropTable
DROP TABLE "Topics";

-- DropTable
DROP TABLE "_ChannelsToTopics";

-- DropTable
DROP TABLE "_RecommendedToTopics";

-- CreateTable
CREATE TABLE "Topic" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Topic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_RecommendedToTopic" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ChannelsToTopic" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Topic_userId_key" ON "Topic"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "_RecommendedToTopic_AB_unique" ON "_RecommendedToTopic"("A", "B");

-- CreateIndex
CREATE INDEX "_RecommendedToTopic_B_index" ON "_RecommendedToTopic"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ChannelsToTopic_AB_unique" ON "_ChannelsToTopic"("A", "B");

-- CreateIndex
CREATE INDEX "_ChannelsToTopic_B_index" ON "_ChannelsToTopic"("B");

-- AddForeignKey
ALTER TABLE "_RecommendedToTopic" ADD CONSTRAINT "_RecommendedToTopic_A_fkey" FOREIGN KEY ("A") REFERENCES "Recommended"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecommendedToTopic" ADD CONSTRAINT "_RecommendedToTopic_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChannelsToTopic" ADD CONSTRAINT "_ChannelsToTopic_A_fkey" FOREIGN KEY ("A") REFERENCES "Channels"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChannelsToTopic" ADD CONSTRAINT "_ChannelsToTopic_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;
