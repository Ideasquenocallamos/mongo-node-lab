const { connectDB } = require("./database");

async function insertProducto() {
  const db = await connectDB();
  const productos = db.collection("productos");

  const nuevoProducto = { nombre: "Laptop", precio: 1200, stock: 10 };
  const resultado = await productos.insertOne(nuevoProducto);

  console.log("✅ Producto insertado con ID:", resultado.insertedId);
}

async function leerProductos() {
  const db = await connectDB();
  const productos = db.collection("productos");

  const lista = await productos.find().toArray();
  console.log("📦 Lista de productos:", lista);
}

async function actualizarProducto() {
  const db = await connectDB();
  const productos = db.collection("productos");

  const resultado = await productos.updateOne(
    { nombre: "Laptop" },
    { $set: { precio: 1100 } }
  );

  console.log("✏️ Documentos actualizados:", resultado.modifiedCount);
}

async function eliminarProducto() {
  const db = await connectDB();
  const productos = db.collection("productos");

  const resultado = await productos.deleteOne({ nombre: "Laptop" });

  console.log("🗑️ Producto eliminado:", resultado.deletedCount);
}

async function main() {
  const db = await connectDB();

  if (db) {
    console.log("🎯 Base de datos lista para usar.\n");
  }

  await insertProducto();
  await leerProductos();        // ver insertado

  await actualizarProducto();
  await leerProductos();        // ver actualizado

  await eliminarProducto();
  await leerProductos();        // ver eliminado
}

main();