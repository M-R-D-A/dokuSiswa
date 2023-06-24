const models = require('../../models/index');
const jawaban = models.jawaban;

module.exports = {
    controllerGetAll: async (req, res) => {
        try {
            await jawaban
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
            pilihan_id: req.body.pilihan_id,
            opsi: req.body.opsi
        };

        jawaban.create(data)
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
                pilihan_id: req.body.pilihan_id,
                opsi: req.body.opsi
            };
            let id = { id: req.params.id };
            jawaban
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

            jawaban
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