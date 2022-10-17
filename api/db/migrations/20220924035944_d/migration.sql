/*
  Warnings:

  - You are about to drop the `CategoriesOnPost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CategoriesOnPost" DROP CONSTRAINT "CategoriesOnPost_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "CategoriesOnPost" DROP CONSTRAINT "CategoriesOnPost_postId_fkey";

-- DropTable
DROP TABLE "CategoriesOnPost";

-- DropTable
DROP TABLE "Category";

-- DropTable
DROP TABLE "Post";
