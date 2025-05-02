const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('uploads'));

// Konfigurasi penyimpanan gambar
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Folder penyimpanan
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Nama unik
    }
});

const upload = multer({ storage });

// Endpoint untuk mengunggah gambar
app.post('/upload', upload.single('image'), (req, res) => {
    if (req.file) {
        res.json({
            message: 'Gambar berhasil diunggah!',
            imageUrl: `/uploads/${req.file.filename}`
        });
    } else {
        res.status(400).json({ message: 'Unggah gambar gagal!' });
    }
});

// Jalankan server
app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));
