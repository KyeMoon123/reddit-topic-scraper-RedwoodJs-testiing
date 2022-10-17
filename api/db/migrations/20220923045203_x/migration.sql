-- AlterTable
ALTER TABLE "Recommended" ADD COLUMN     "new" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "userId" INTEGER;

-- AddForeignKey
ALTER TABLE "Recommended" ADD CONSTRAINT "Recommended_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
