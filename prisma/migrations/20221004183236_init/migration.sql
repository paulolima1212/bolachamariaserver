-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_name_fkey";

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
