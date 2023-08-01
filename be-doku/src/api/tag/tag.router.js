const express = require('express');
const Auth = require('../../middleware/Auth');

const router = express.Router();
const {
    controllerGetAll,
    controllerAdd,
    controllerEdit,
    controllerDelete,
    controllerGetBySubId,
} = require('./tag.controller');

const verifyRoles = require("../../middleware/verifyRoles")

router.get('/', Auth, verifyRoles('siswa'), controllerGetAll)
router.get('/sub/:id', Auth, verifyRoles('siswa'), controllerGetBySubId)
router.post('/', Auth, verifyRoles('siswa'), controllerAdd)
router.put('/:id', Auth, verifyRoles('siswa'), controllerEdit)
router.delete('/:id', Auth, verifyRoles('siswa'), controllerDelete)

module.exports = router;