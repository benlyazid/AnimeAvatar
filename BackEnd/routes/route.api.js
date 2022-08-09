const express = require('express');
const router = express.Router();
const imagesController = require("../controllers/controller.image");
const validateData = require('../middlewares/middleware.validateData')
const saveData = require('../middlewares/middleware.saveData')

router.get("/api/avatar", validateData, saveData, imagesController.getAnimeImage);
router.get("/api/animelist", imagesController.getAnimeList);
router.get("/api/statistiques",imagesController.getStatistiques)

module.exports = router;