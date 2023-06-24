const models = require('../../models/index');
const pilihan_siswa = models.pilihan_siswa;

module.exports = {
    controllerGetAll: async (req, res) => {
        try {
            await pilihan_siswa
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
            siswa_id: req.body.siswa_id,
            opsi: req.body.opsi
        };

        pilihan_siswa.create(data)
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
                sub_topic_id: req.body.sub_topic_id,
                nama: req.body.nama,
                pilihan_siswa: req.body.pilihan_siswa,
                foto: req?.body.foto,
                tag_id: req.body.tag_id
            };
            let id = { id: req.params.id };
            pilihan_siswa
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

            pilihan_siswa
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