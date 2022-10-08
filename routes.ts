import { Router } from "express";
import { CreateCategoryController } from "./src/Controllers/createCategoryController";
import { CreateProductController } from "./src/Controllers/createProductController";
import { GetAllProductsController } from "./src/Controllers/getAllProductsController";

const router = Router();

const createCategory = new CreateCategoryController();
const createProduct = new CreateProductController();
const getAllProducts = new GetAllProductsController();

router.post("/createproduct", createProduct.handle);
router.post("/createcategory", createCategory.handle);
router.get("/", getAllProducts.handle);

export { router };
