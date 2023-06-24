const models = require('../../models/index');
const admin = models.admin;

const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");
const { Op } = require("sequelize");


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
        const salt = await bcrypt.genSalt(12);
        const hashPass = await bcrypt.hash(req.body.password, salt);

        let data = {
            role: req.body.role,
            nama: req.body.nama,
            password: hashPass,
            nomor_pengenal: req.body.nomor_pengenal,
            foto: req?.body.foto,
            no_wa: req.body.no_wa
        };
        if (req.file) {
            try {
                data.foto = req.file.filename;
            } catch (error) {
                res.json({
                    message: error.message,
                });
            }
        } else {
            try {
                data['foto'] = "default.png";
            } catch (error) {
                res.json({
                    message: error.message,
                });
            }
        }
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
    controllerAuthLogin: async (req, res) => {
        //cari data user yang username dan password sama dengan input
        try {
            let result = await admin.findAll({
                where: {
                    nama: req.body.nama,
                },
            });
            if (result) {
                const match = await bcrypt.compare(req.body.password, result[0].password);
                if (!match) return res.status(400).json({ message: "password salah" });
                if (result[0].role === "admin") {
                    const idUser = result[0].id;
                    const role = result[0].role;

                    let localToken = jwt.sign({ idUser, role }, process.env.ACCESS_TOKEN_SECRET);

                    const data = await admin.findAll({
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
                    res.status(404).json({ message: "kamu bukan admin" });
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
    controllerEdit: async (req, res) => {
        const salt = await bcrypt.genSalt(12);

        const password = req.body.password == null ? 'check' : req.body.password
        const hashPass = await bcrypt.hash(password, salt);
        try {
            let param = {
                id: req.params.id,
            };
            let result = await admin.findAll({
                where: param
            });
            if (result.length > 0) {
                let data = {
                    role: req.body.role,
                    nama: req.body.nama,
                    password: hashPass,
                    nomor_pengenal: req.body.nomor_pengenal,
                    foto: req?.body.foto,
                    no_wa: req.body.no_wa
                };
                let dataNoPsw = {
                    role: req.body.role,
                    nama: req.body.nama,
                    nomor_pengenal: req.body.nomor_pengenal,
                    foto: req?.body.foto,
                    no_wa: req.body.no_wa
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
                await admin
                    .update(req.body.password == null ? dataNoPsw : data, { where: param })
                    .then((result) => {
                        const imagePath = "http://localhost:8080/image/";
                        admin
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