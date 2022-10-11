//rutas producto
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

//api/producto
router.post('/', productoController.crearProducto);

module.exports = router;
