/*
  Warnings:

  - You are about to drop the `Recommended` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "RecommendedOnTopic" DROP CONSTRAINT "RecommendedOnTopic_recommended_id_fkey";

-- DropTable
DROP TABLE "Recommended";

-- AddForeignKey
ALTER TABLE "RecommendedOnTopic" ADD CONSTRAINT "RecommendedOnTopic_recommended_id_fkey" FOREIGN KEY ("recommended_id") REFERENCES "RedditMessages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
