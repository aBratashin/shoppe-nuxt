-- CreateTable
CREATE TABLE "Category"
(
    "id"    SERIAL NOT NULL,
    "name"  TEXT   NOT NULL,
    "alias" TEXT   NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);
