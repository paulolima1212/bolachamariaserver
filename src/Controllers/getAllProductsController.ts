import { Request, Response } from "express";
import { GetAllProducts } from "../Models/getAllProducts";

export class GetAllProductsController {
  async handle(req: Request, res: Response) {
    const getAllProducts = new GetAllProducts();

    const data = await getAllProducts.handle();

    return res.json(data);
  }
}
