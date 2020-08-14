var express = require('express');
var router= express.Router();
var UsuarioController = require('../../controllers/api/usuarioControllerAPI')

router.get('/', UsuarioController.usuario_list);
router.post('/create', UsuarioController.usuario_create);
router.post('/reservar', UsuarioController.usuario_reservar);
module.exports = router;