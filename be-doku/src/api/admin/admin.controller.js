const models = require('../../models/index');
const admin = models.admin;

module.exports = {
    controllerGetAll: async (req, res) => {
        try {
            await admin
                .findAll({
                })
                .then((result) => {
                    res.json({
                        status: true,
                        message: "successful",
                        data: result,
                    });
                })
                .catch((error) => {
                    res.json({
                        message: error.message,
                    });
                });
        } catch (error) {
            console.log(error);
        }
    },
    controllerAdd: async (req, res) => {

        let data = {
            role: req.body.role,
            nama: req.body.nama,
            nomor_pengenal: req.body.nomor_pengenal,
            foto: req?.body.foto,
            no_wa: req.body.no_wa
        };

        admin.create(data)
            .then(async (result) => {
                res.status(201).json({
                    status: true,
                    message: "data has been inserted",
                    data: result,
                    data,
                });
            })
            .catch((error) => {
                res.json({
                    message: error.message,
                });
            });
    },
    controllerEdit: async (req, res) => {
        try {
            let data = {
                role: req.body.role,
                nama: req.body.nama,
                nomor_pengenal: req.body.nomor_pengenal,
                foto: req?.body.foto,
                no_wa: req.body.no_wa
            };
            let id = { id: req.params.id };
            admin
                .update(data, { where: id })
                .then((result) => {
                    res.status(201).json({
                        status: true,
                        message: result + " data was updated",
                        data: result
                    });
                })
                .catch((error) => {
                    res.json({
                        message: error.message,
                    });
                });
        } catch (error) {
            res.json({
                message: error.message,
            });
        }
    },
    controllerDelete: async (req, res) => {
        try {
            let id = { id: req.params.id };

            admin
                .destroy({ where: id })
                .then((result) => {
                    res.status(201).json({
                        status: true,
                        message: result + " data was deleted",
                        data: result
                    });
                })
                .catch((error) => {
                    res.json({
                        message: error.message,
                    });
                });
        } catch (error) {
            res.json({
                message: error.message,
            });
        }
    },
}