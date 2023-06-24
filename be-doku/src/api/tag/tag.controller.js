const models = require('../../models/index');
const tag = models.tag;

module.exports = {
    controllerGetAll: async (req, res) => {
        try {
            await tag
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
            siswa_id: req.body.siswa_id,
            sub_topic_id: req.body.sub_topic_id,
            background: req.body.background,
            text: req.body.text,
            nama: req.body.nama,
        };

        tag.create(data)
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
                siswa_id: req.body.siswa_id,
                sub_topic_id: req.body.sub_topic_id,
                background: req.body.background,
                text: req.body.text,
                nama: req.body.nama,
            };
            let id = { id: req.params.id };
            tag
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

            tag
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