require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT

const app = express();
app.use(cors());
app.use(express.json())
app.use(express.static(__dirname))


const topic = require('./src/api/topic/topic.router');
app.use('/api/topic', topic);
const sub_topic = require('./src/api/sub_topic/sub_topic.router');
app.use('/api/sub_topic', sub_topic);
const dokumentasi = require('./src/api/dokumentasi/dokumentasi.router');
app.use('/api/dokumentasi', dokumentasi);


const siswa = require('./src/api/siswa/siswa.router');
app.use('/api/siswa', siswa);
const tugas_siswa = require('./src/api/tugas_siswa/tugas_siswa.router');
app.use('/api/tugas_siswa', tugas_siswa);

const tugas = require('./src/api/tugas/tugas.router');
app.use('/api/tugas', tugas);
const jawaban = require('./src/api/jawaban/jawaban.router');
app.use('/api/jawaban', jawaban);
const pilihan_siswa = require('./src/api/pilihan_siswa/pilihan_siswa.router');
app.use('/api/pilihan_siswa', pilihan_siswa);
const pilihan = require('./src/api/pilihan/pilihan.router');
app.use('/api/pilihan', pilihan);
const tag = require('./src/api/tag/tag.router');
app.use('/api/tag', tag);

const kelas = require('./src/api/kelas/kelas.router');
app.use('/api/kelas', kelas);
const kelas_siswa = require('./src/api/kelas_siswa/kelas_siswa.router');
app.use('/api/kelas_siswa', kelas_siswa);

app.listen(PORT, () => {
    console.log('server run on port ' + PORT)
})