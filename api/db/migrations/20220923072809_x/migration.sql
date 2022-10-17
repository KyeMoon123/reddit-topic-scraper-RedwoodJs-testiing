/*
  Warnings:

  - You are about to drop the `_RecommendedToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_RecommendedToUser" DROP CONSTRAINT "_RecommendedToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_RecommendedToUser" DROP CONSTRAINT "_RecommendedToUser_B_fkey";

-- DropTable
DROP TABLE "_RecommendedToUser";

-- CreateTable
CREATE TABLE "Topics" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Topics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Channels" (
    "id" SERIAL NOT NULL,
    "channel_name" TEXT NOT NULL,

    CONSTRAINT "Channels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_RecommendedToTopics" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ChannelsToTopics" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Channels_channel_name_key" ON "Channels"("channel_name");

-- CreateIndex
CREATE UNIQUE INDEX "_RecommendedToTopics_AB_unique" ON "_RecommendedToTopics"("A", "B");

-- CreateIndex
CREATE INDEX "_RecommendedToTopics_B_index" ON "_RecommendedToTopics"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ChannelsToTopics_AB_unique" ON "_ChannelsToTopics"("A", "B");

-- CreateIndex
CREATE INDEX "_ChannelsToTopics_B_index" ON "_ChannelsToTopics"("B");

-- AddForeignKey
ALTER TABLE "Topics" ADD CONSTRAINT "Topics_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecommendedToTopics" ADD CONSTRAINT "_RecommendedToTopics_A_fkey" FOREIGN KEY ("A") REFERENCES "Recommended"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecommendedToTopics" ADD CONSTRAINT "_RecommendedToTopics_B_fkey" FOREIGN KEY ("B") REFERENCES "Topics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChannelsToTopics" ADD CONSTRAINT "_ChannelsToTopics_A_fkey" FOREIGN KEY ("A") REFERENCES "Channels"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChannelsToTopics" ADD CONSTRAINT "_ChannelsToTopics_B_fkey" FOREIGN KEY ("B") REFERENCES "Topics"("id") ON DELETE CASCADE ON UPDATE CASCADE;
