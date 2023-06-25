const express = require('express');
const Auth = require('../../middleware/Auth');

const router = express.Router();
const {
    controllerGetAll,
    controllerAdd,
    controllerEdit,
    controllerDelete,
    controllerGetByIdSiswa,
} = require('./topic.controller');

const verifyRoles = require("../../middleware/verifyRoles")

router.get('/',  Auth, verifyRoles('siswa'), controllerGetAll)
router.get('/:id', Auth, verifyRoles('siswa'), controllerGetByIdSiswa)
router.post('/', Auth, verifyRoles('admin'), controllerAdd)
router.put('/:id', Auth, verifyRoles('admin'), controllerEdit)
router.delete('/:id', Auth, verifyRoles('admin'), controllerDelete)

module.exports = router;