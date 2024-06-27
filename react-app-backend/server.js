// app.post("/api/products", async (req, res) => {
//   try {
//     product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });


const express = require("express")
const cors = require("cors");
const connectDB = require("./config/db");
const productRouter = require("./routes/productRoutes");

// app config
const app = express();
const PORT = 5000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoints
app.use("api/product", productRouter)


app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
})