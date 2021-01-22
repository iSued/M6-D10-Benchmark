const express = require("express");
const Review = require("../../db").Review;
const Product = require("../../db").Product;

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    /*     const review = await Review.create(req.body); */
    res.send("dio merda madonna puttana");
    res.status(201).send(review);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
