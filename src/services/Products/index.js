const express = require("express");
const Review = require("../../db").Review;
const Product = require("../../db").Product;

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).send(product);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
module.exports = router;
