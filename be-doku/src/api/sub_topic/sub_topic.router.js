const express = require('express');
const Auth = require('../../middleware/Auth');

const router = express.Router();
const {
    controllerGetAll,
    controllerAdd,
    controllerEdit,
    controllerDelete,
    controllerGetByIdTopic,
} = require('./sub_topic.controller');

const verifyRoles = require("../../middleware/verifyRoles")

router.get('/', Auth, verifyRoles('admin', 'siswa'), controllerGetAll)
router.get('/:id', Auth, verifyRoles('admin', 'siswa'), controllerGetByIdTopic)
router.post('/', Auth, verifyRoles('admin', 'siswa'), controllerAdd)
router.put('/:id', Auth, verifyRoles('admin', 'siswa'), controllerEdit)
router.delete('/:id', Auth, verifyRoles('admin', 'siswa'), controllerDelete)

module.exports = router;