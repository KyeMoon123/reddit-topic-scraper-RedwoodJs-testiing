/*
  Warnings:

  - You are about to drop the `Channels` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ChannelsToTopic` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ChannelsToTopic" DROP CONSTRAINT "_ChannelsToTopic_A_fkey";

-- DropForeignKey
ALTER TABLE "_ChannelsToTopic" DROP CONSTRAINT "_ChannelsToTopic_B_fkey";

-- DropTable
DROP TABLE "Channels";

-- DropTable
DROP TABLE "_ChannelsToTopic";

-- CreateTable
CREATE TABLE "Channel" (
    "id" SERIAL NOT NULL,
    "channel_name" TEXT NOT NULL,

    CONSTRAINT "Channel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ChannelToTopic" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Channel_channel_name_key" ON "Channel"("channel_name");

-- CreateIndex
CREATE UNIQUE INDEX "_ChannelToTopic_AB_unique" ON "_ChannelToTopic"("A", "B");

-- CreateIndex
CREATE INDEX "_ChannelToTopic_B_index" ON "_ChannelToTopic"("B");

-- AddForeignKey
ALTER TABLE "_ChannelToTopic" ADD CONSTRAINT "_ChannelToTopic_A_fkey" FOREIGN KEY ("A") REFERENCES "Channel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChannelToTopic" ADD CONSTRAINT "_ChannelToTopic_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;
