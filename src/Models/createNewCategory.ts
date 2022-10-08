import { prisma } from "../Lib/prisma";

export class CreateNewCategory {
  async handle({ name, description }: { name: string; description: string }) {
    const data = await prisma.category.create({
      data: {
        name,
        description,
      },
    });

    return data;
  }
}
