import { Request, Response } from "express";
import { CreateNewCategory } from "../Models/createNewCategory";

export class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const { name, description }: { name: string; description: string } =
      req.body;

    const createCategory = new CreateNewCategory();

    const data = await createCategory.handle({name, description})

    return res.json(data);
  }
}
