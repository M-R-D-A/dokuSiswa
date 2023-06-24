const models = require('../../models/index');
const siswa = models.siswa;

const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");
const { Op } = require("sequelize");

module.exports = {
    controllerGetAll: async (req, res) => {
        try {
            await siswa
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
        const salt = await bcrypt.genSalt(12);
        const hashPass = await bcrypt.hash(req.body.password, salt);

        let data = {
            role: req.body.role,
            nama: req.body.nama,
            password: hashPass,
            no_wa: req.body.no_wa,
            sekolah_id: req.body.sekolah_id,
            kelas: req.body.kelas,
            foto: req?.body.foto
        };

        siswa.create(data)
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
        const salt = await bcrypt.genSalt(12);

        const password = req.body.password == null ? 'check' : req.body.password
        const hashPass = await bcrypt.hash(password, salt);
        try {
            let param = {
                id: req.params.id,
            };
            let result = await siswa.findAll({
                where: param
            });
            if (result.length > 0) {
                let data = {
                    role: req.body.role,
                    nama: req.body.nama,
                    password: hashPass,
                    no_wa: req.body.no_wa,
                    sekolah_id: req.body.sekolah_id,
                    kelas: req.body.kelas,
                    foto: req?.body.foto
                };
                let dataNoPsw = {
                    role: req.body.role,
                    nama: req.body.nama,
                    no_wa: req.body.no_wa,
                    sekolah_id: req.body.sekolah_id,
                    kelas: req.body.kelas,
                    foto: req?.body.foto
                };
                if (req.file) {
                    const imagePath = localStorage + "/" + result[0].foto;
                    fs.unlink(imagePath, (err) => {
                        if (err) {
                            console.error(err);
                            return;
                        }
                        console.log('User image deleted successfully');
                    });
                    data.foto = req.file.filename;
                }
                await siswa
                    .update(req.body.password == null ? dataNoPsw : data, { where: param })
                    .then((result) => {
                        const imagePath = "http://localhost:8080/image/";
                        siswa
                            .findOne({
                                where: {
                                    id: req.params.id
                                },
                            })
                            .then((result) => {
                                res.json({
                                    data: result,
                                    image: imagePath + result.foto
                                });
                            })
                            .catch((error) => {
                                res.json({
                                    message: error.message,
                                });
                            });
                    })
                    .catch((error) => {
                        res.json({
                            message: error.message,
                        });
                    });
            } else {
                res.status(404).json({ msg: "User not found" });
            }
        } catch (error) {
            res.status(404).json({ msg: error.message });
        }
    },
    controllerAuthLogin: async (req, res) => {
        try {
            let result = await siswa.findAll({
                where: {
                    nama: req.body.nama,
                },
            });
            if (result) {
                const match = await bcrypt.compare(req.body.password, result[0].password);
                if (!match) return res.status(400).json({ message: "password salah" });
                if (result[0].role === "siswa") {
                    const idUser = result[0].id;
                    const role = result[0].role;

                    let localToken = jwt.sign({ idUser, role }, process.env.ACCESS_TOKEN_SECRET);

                    const data = await siswa.findAll({
                        where: {
                            nama: req.body.nama,
                        },
                    });
                    res.json({
                        logged: true,
                        data: data[0],
                        token: localToken,
                    });
                } else {
                    res.status(404).json({ message: "kamu bukan siswa" });
                }
            } else {
                //tidak ditemukan
                res.json({
                    logged: false,
                    message: "Invalid username or password",
                });
            }
        } catch (error) {
            res.status(404).json({ msg: error.message });
        }
    },
    controllerDelete: async (req, res) => {
        try {
            let id = { id: req.params.id };

            siswa
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