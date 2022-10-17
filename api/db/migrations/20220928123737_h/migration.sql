-- CreateTable
CREATE TABLE "Recommended" (
    "id" SERIAL NOT NULL,
    "channelId" TEXT NOT NULL,
    "Title" TEXT NOT NULL,
    "Url" TEXT NOT NULL,
    "Score" INTEGER NOT NULL,

    CONSTRAINT "Recommended_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecommendedOnTopic" (
    "id" SERIAL NOT NULL,
    "topicId" INTEGER NOT NULL,
    "RecommendedId" INTEGER NOT NULL,

    CONSTRAINT "RecommendedOnTopic_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RecommendedOnTopic_topicId_RecommendedId_key" ON "RecommendedOnTopic"("topicId", "RecommendedId");

-- AddForeignKey
ALTER TABLE "RecommendedOnTopic" ADD CONSTRAINT "RecommendedOnTopic_RecommendedId_fkey" FOREIGN KEY ("RecommendedId") REFERENCES "Recommended"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecommendedOnTopic" ADD CONSTRAINT "RecommendedOnTopic_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
