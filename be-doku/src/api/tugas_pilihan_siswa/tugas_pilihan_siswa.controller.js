const models = require('../../models/index');
const tugas_pilihan_siswa = models.tugas_pilihan_siswa;

module.exports = {
    controllerGetAll: async (req, res) => {
        try {
            await tugas_pilihan_siswa
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
            sub_topic_id: req.body.sub_topic_id,
            nama: req.body.nama,
            tugas_pilihan_siswa: req.body.tugas_pilihan_siswa,
            foto: req?.body.foto,
            tag_id: req.body.tag_id
        };

        tugas_pilihan_siswa.create(data)
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
                tugas_pilihan_siswa: req.body.tugas_pilihan_siswa,
                foto: req?.body.foto,
                tag_id: req.body.tag_id
            };
            let id = { id: req.params.id };
            tugas_pilihan_siswa
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

            tugas_pilihan_siswa
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