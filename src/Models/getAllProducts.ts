import { prisma } from "../Lib/prisma";

export class GetAllProducts {
  async handle() {
    const data = await prisma.product.findMany();

    return data;
  }
}
