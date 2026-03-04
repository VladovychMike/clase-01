const categorias = [
  {
    id: 1, name: "Electro", description: "Lorem ipsum",
  },
  {
    id: 2, name: "Bazar", description: "Lorem ipsum bazar",
  },
];

export const getCategorias = (req, res) => {
const id = parseInt(req.params.id);

if (isNaN(id)) {
  return res.status(400).json({ message: "Invalid ID" });
}}

const categoria = categorias.find((c) => c.id == id);

if (!categoria) {
  return res.status(404).json({ message: "Category not found" });
}
res.json(categoria);    

export const createCategoria = (req, res) => {
  const newCategoria = {
    id: Date.now(),
    name: req.body.name,
    description: req.body.description,
  };
  categorias.push(newCategoria);
  res.status(201).json(newCategoria);
};