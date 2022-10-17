/*
  Warnings:

  - You are about to drop the column `userId` on the `Recommended` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Recommended" DROP CONSTRAINT "Recommended_userId_fkey";

-- AlterTable
ALTER TABLE "Recommended" DROP COLUMN "userId";

-- CreateTable
CREATE TABLE "_RecommendedToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_RecommendedToUser_AB_unique" ON "_RecommendedToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_RecommendedToUser_B_index" ON "_RecommendedToUser"("B");

-- AddForeignKey
ALTER TABLE "_RecommendedToUser" ADD CONSTRAINT "_RecommendedToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Recommended"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecommendedToUser" ADD CONSTRAINT "_RecommendedToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
