-- CreateTable
CREATE TABLE "Recommended" (
    "id" SERIAL NOT NULL,
    "message_ext_id" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Recommended_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Recommended_message_ext_id_key" ON "Recommended"("message_ext_id");
