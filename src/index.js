const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const beneficiaryRoutes = require("./Routes/beneficiaryRoutes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use(beneficiaryRoutes);

mongoose
    .connect("mongodb://localhost:27017/beneficiariesDB")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

app.listen(PORT, () => {
    console.log(`Server running on PORT: 5000`);
});
