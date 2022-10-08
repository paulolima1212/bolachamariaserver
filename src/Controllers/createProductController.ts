import { Request, Response } from "express";
import { CreateNewProduct } from "../Models/createNewProduct";

export class CreateProductController {
  async handle(req: Request, res: Response) {
    console.log(req.body);
    const { body } = req;

    const createProduct = new CreateNewProduct();

    const data = await createProduct.handle(body);

    return res.json(data);
  }
}
