/*
  Warnings:

  - The `date_recommended` column on the `RecommendedOnTopic` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "RecommendedOnTopic" DROP COLUMN "date_recommended",
ADD COLUMN     "date_recommended" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
