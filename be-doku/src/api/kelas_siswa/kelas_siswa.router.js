const express = require('express');
const Auth = require('../../middleware/Auth');

const router = express.Router();
const {
    controllerGetAll,
    controllerAdd,
    controllerEdit,
    controllerDelete,
} = require('./kelas_siswa.controller');

const verifyRoles = require("../../middleware/verifyRoles")

router.get('/', Auth, verifyRoles('admin', 'siswa'), controllerGetAll)
router.post('/', Auth, verifyRoles('admin', 'siswa'), controllerAdd)
router.put('/:id', Auth, verifyRoles('admin', 'siswa'), controllerEdit)
router.delete('/:id', Auth, verifyRoles('admin', 'siswa'), controllerDelete)

module.exports = router;