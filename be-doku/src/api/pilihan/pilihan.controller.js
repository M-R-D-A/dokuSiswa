const models = require('../../models/index');
const pilihan = models.pilihan;

module.exports = {
    controllerGetAll: async (req, res) => {
        try {
            await pilihan
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
            tugas_pilihan_id: req.body.tugas_pilihan_id,
            opsi1: req.body.opsi1,
            opsi2: req.body.opsi2,
            opsi3: req.body.opsi3,
            opsi4: req.body.opsi4,
        };

        pilihan.create(data)
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
                tugas_pilihan_id: req.body.tugas_pilihan_id,
                opsi1: req.body.opsi1,
                opsi2: req.body.opsi2,
                opsi3: req.body.opsi3,
                opsi4: req.body.opsi4,
            };
            let id = { id: req.params.id };
            pilihan
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

            pilihan
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