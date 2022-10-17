/*
  Warnings:

  - You are about to drop the `CategoriesOnPosts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CategoriesOnPosts" DROP CONSTRAINT "CategoriesOnPosts_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "CategoriesOnPosts" DROP CONSTRAINT "CategoriesOnPosts_postId_fkey";

-- DropTable
DROP TABLE "CategoriesOnPosts";

-- CreateTable
CREATE TABLE "CategoriesOnPost" (
    "id" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "CategoriesOnPost_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CategoriesOnPost_postId_categoryId_key" ON "CategoriesOnPost"("postId", "categoryId");

-- AddForeignKey
ALTER TABLE "CategoriesOnPost" ADD CONSTRAINT "CategoriesOnPost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriesOnPost" ADD CONSTRAINT "CategoriesOnPost_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
