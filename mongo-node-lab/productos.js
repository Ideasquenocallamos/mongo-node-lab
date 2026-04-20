const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Conectado a MongoDB con Mongoose"))
  .catch(error => console.error(" Error:", error));

const ProductoSchema = new mongoose.Schema({
  nombre: String,
  precio: Number,
  stock: Number
});

const Producto = mongoose.model("Producto", ProductoSchema);

// Insertar un producto
async function crearProducto() {
  const producto = new Producto({ nombre: "Mouse", precio: 50, stock: 20 });
  await producto.save();
  console.log("Producto guardado:", producto);
}

crearProducto();