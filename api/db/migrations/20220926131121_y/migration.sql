/*
  Warnings:

  - You are about to drop the `Recommended` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_RecommendedToTopic` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_RecommendedToTopic" DROP CONSTRAINT "_RecommendedToTopic_A_fkey";

-- DropForeignKey
ALTER TABLE "_RecommendedToTopic" DROP CONSTRAINT "_RecommendedToTopic_B_fkey";

-- DropIndex
DROP INDEX "Topic_userId_key";

-- DropTable
DROP TABLE "Recommended";

-- DropTable
DROP TABLE "_RecommendedToTopic";
