const express = require('express');
const router = express.Router();
const imagesController = require("../controllers/controller.image");
const validateData = require('../middlewares/middleware.validateData')
const saveData = require('../middlewares/middleware.saveData')
const updateStatistiques = require('../middlewares/middleware.updateStatistiques')

router.get("/api/avatar", validateData, saveData, updateStatistiques, imagesController.getAnimeImage);
router.get("/api/animelist", imagesController.getAnimeList);
router.get("/api/statistiques",imagesController.getStatistiques)

module.exports = router;