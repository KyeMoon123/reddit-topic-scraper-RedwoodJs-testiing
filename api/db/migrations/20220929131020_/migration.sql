/*
  Warnings:

  - You are about to drop the column `Score` on the `Recommended` table. All the data in the column will be lost.
  - You are about to drop the column `Title` on the `Recommended` table. All the data in the column will be lost.
  - You are about to drop the column `Url` on the `Recommended` table. All the data in the column will be lost.
  - You are about to drop the column `RecommendedId` on the `RecommendedOnTopic` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[topicId,recommendedId]` on the table `RecommendedOnTopic` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `score` to the `Recommended` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Recommended` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Recommended` table without a default value. This is not possible if the table is not empty.
  - Added the required column `recommendedId` to the `RecommendedOnTopic` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "RecommendedOnTopic" DROP CONSTRAINT "RecommendedOnTopic_RecommendedId_fkey";

-- DropIndex
DROP INDEX "RecommendedOnTopic_topicId_RecommendedId_key";

-- AlterTable
ALTER TABLE "Recommended" DROP COLUMN "Score",
DROP COLUMN "Title",
DROP COLUMN "Url",
ADD COLUMN     "score" INTEGER NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "RecommendedOnTopic" DROP COLUMN "RecommendedId",
ADD COLUMN     "recommendedId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "RecommendedOnTopic_topicId_recommendedId_key" ON "RecommendedOnTopic"("topicId", "recommendedId");

-- AddForeignKey
ALTER TABLE "RecommendedOnTopic" ADD CONSTRAINT "RecommendedOnTopic_recommendedId_fkey" FOREIGN KEY ("recommendedId") REFERENCES "Recommended"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
