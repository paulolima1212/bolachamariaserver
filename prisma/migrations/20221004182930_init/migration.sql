/*
  Warnings:

  - You are about to drop the column `dscription` on the `products` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `categories` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_categoryId_fkey";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "dscription",
ADD COLUMN     "description" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "stock" SET DEFAULT 0,
ALTER COLUMN "validate_stock" SET DEFAULT false,
ALTER COLUMN "use_card" SET DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_name_fkey" FOREIGN KEY ("name") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
