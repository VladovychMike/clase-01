import { Router } from "express";

const router = Router();

import { getProducts, getProductsById, createProduct } from "../controllers/products.controller.js";

const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Mouse", price: 20 },
];
router.get("/", getProducts);
router.get("/:id", getProductsById);  
router.post("/", createProduct);       

export default router;