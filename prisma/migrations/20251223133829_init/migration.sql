-- CreateTable
CREATE TABLE "Product"
(
    "id"                SERIAL       NOT NULL,
    "name"              TEXT         NOT NULL,
    "price"             INTEGER      NOT NULL,
    "short_description" TEXT         NOT NULL,
    "long_description"  TEXT         NOT NULL,
    "sku"               TEXT         NOT NULL,
    "discount"          INTEGER      NOT NULL,
    "images"            TEXT[],
    "category_id"       INTEGER      NOT NULL,
    "created_at"        TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at"        TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product"
    ADD CONSTRAINT "Product_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
