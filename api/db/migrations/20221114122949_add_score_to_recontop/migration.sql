/*
  Warnings:

  - Added the required column `score` to the `RecommendedOnTopic` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RecommendedOnTopic" ADD COLUMN     "score" INTEGER NOT NULL;
