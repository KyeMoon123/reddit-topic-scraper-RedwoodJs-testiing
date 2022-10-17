/*
  Warnings:

  - A unique constraint covering the columns `[ext_id]` on the table `Subreddit` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `channelName` to the `Recommended` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `Recommended` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ext_id` to the `Subreddit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Recommended" ADD COLUMN     "channelName" TEXT NOT NULL,
ADD COLUMN     "content" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Subreddit" ADD COLUMN     "ext_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Subreddit_ext_id_key" ON "Subreddit"("ext_id");
