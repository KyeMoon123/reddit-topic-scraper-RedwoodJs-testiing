/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Topics` will be added. If there are existing duplicate values, this will fail.
  - Made the column `userId` on table `Topics` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Topics" DROP CONSTRAINT "Topics_userId_fkey";

-- AlterTable
ALTER TABLE "Topics" ALTER COLUMN "userId" SET NOT NULL,
ALTER COLUMN "userId" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "User";

-- CreateIndex
CREATE UNIQUE INDEX "Topics_userId_key" ON "Topics"("userId");
