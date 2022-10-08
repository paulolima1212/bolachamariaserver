import { ProductProps } from "../Interface/Product";
import { prisma } from "../Lib/prisma";

export class CreateNewProduct{
    async handle({name, price, categoryId, description, use_card, validate_stock}:ProductProps){
        const data = await prisma.product.create({
            data:{
                name,
                price,
                categoryId,
                description,
                use_card,
                validate_stock
            }
        })
    }
}