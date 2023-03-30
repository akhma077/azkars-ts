const chalk = require("chalk");
const express = require("express");
const NavBar = require("../models/NavBar");
const path = require("path");
const router = express.Router({ mergeParams: true });

router.post("/", async (req, res) => {
  try {
    console.log("image");
    const image = req.files["image"];

    image.mv("../client/src/img/" + image.name);
    const newNavBar = await NavBar.create({
      ...req.body,
      image: `${image.name}`,
    });
    res.status(201).send(newNavBar);
  } catch (error) {
    res.status(500).json({
      message: "Сервер временно не доступен, проверьте свои данные",
    });
  }
});
router.delete("/:ID", async (req, res) => {
  try {
    const { ID } = req.params;
    const deleteImage = await NavBar.remove({ _id: ID });
    res.status(201).send(deleteImage);
  } catch (error) {
    res.status(500).json({
      message: "Сервер временно не доступен, проверьте свои данные",
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const list = await NavBar.find();
    res.send(list);
  } catch (error) {
    res.status(500).json({
      message: "Сервер временно не доступен, проверьте свои данные",
    });
  }
});

module.exports = router;
