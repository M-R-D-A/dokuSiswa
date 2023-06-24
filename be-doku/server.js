require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT

const app = express();
app.use(cors());
app.use(express.json())
app.use(express.static(__dirname))

const dokumentasi = require('./src/api/dokumentasi/dokumentasi.router');
app.use('/api/dokumentasi', dokumentasi);

const admin = require('./src/api/admin/admin.router');
app.use('/api/admin', admin);
const guru = require('./src/api/guru/guru.router');
app.use('/api/guru', guru);
const jawaban = require('./src/api/jawaban/jawaban.router');
app.use('/api/jawabana', jawaban);
const pilihan_siswa = require('./src/api/pilihan_siswa/pilihan_siswa.router');
app.use('/api/pilihan_siswa', pilihan_siswa);
const pilihan = require('./src/api/pilihan/pilihan.router');
app.use('/api/pilihan', pilihan);
const sekolah = require('./src/api/sekolah/sekolah.router');
app.use('/api/sekolah', sekolah);
const siswa = require('./src/api/siswa/siswa.router');
app.use('/api/siswa', siswa);
const sub_topic = require('./src/api/sub_topic/sub_topic.router');
app.use('/api/sub_topic', sub_topic);
const tag = require('./src/api/tag/tag.router');
app.use('/api/tag', tag);
const topic = require('./src/api/topic/topic.router');
app.use('/api/topic', topic);
const tugas_pilihan_siswa = require('./src/api/tugas_pilihan_siswa/tugas_pilihan_siswa.router');
app.use('/api/tugas_pilihan_siswa', tugas_pilihan_siswa);
const tugas_pilihan = require('./src/api/tugas_pilihan/tugas_pilihan.router');
app.use('/api/tugas_pilihan', tugas_pilihan);

app.listen(PORT, () => {
    console.log('server run on port ' + PORT)
})