const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Mouse", price: 20 },
];


export const getProducts = (req, res) => {
    res.json(products);
};

export const getProductsById = (req, res) => {
    const product = products.find((p) => p.id == req.params.id);
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
};

export const createProduct = (req, res) => {
  const newProduct = {
    id: Date.now(),
    name: req.body.name,
    price: req.body.price,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
};