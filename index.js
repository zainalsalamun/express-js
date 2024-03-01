const express = require('express');
const { use } = require('./router');
const app = express();
const port = 3000;

const user = [];

// Middleware untuk menangani JSON dan URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Menggunakan EJS sebagai view engine
app.set('view engine', 'ejs');

// Route sederhana
app.get('/', (req, res) => {
  res.send('Selamat datang di Express.js!');
});


// Route untuk halaman pendaftaran
app.get('/register', (req, res) => {
  res.render('register');
});
// Route untuk halaman login
app.get('/login', (req, res) => {
    res.render('login');
  });

  app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    user.push({
      username,
      password,
    });
  
    // Setelah validasi atau proses login, mungkin akan meredirect ke halaman dashboard
    res.redirect('/dashboard');
  });

// Route untuk menangani data pendaftaran dari formulir
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  // Lakukan validasi atau penyimpanan data sesuai kebutuhan
  //res.post('register');
  res.send(`Terima kasih ${username} telah mendaftar!`);
  res.json({
    username,
    email,
    password,
  });

});


// Route untuk menampilkan halaman pendaftaran
app.get('/register', (req, res) => {
    res.render('register');
  });
  
  // Route untuk menangani data pendaftaran dari formulir
  app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
  
   user.push({
      username,
      email,
      password,
    });
  
    // Setelah validasi atau proses pendaftaran, mungkin akan meredirect ke halaman login
    res.redirect('/login');
  });

// Route untuk halaman utama setelah login
app.get('/dashboard', (req, res) => {
    // Pastikan bahwa pengguna telah login sebelum mengakses halaman ini
    res.render('index');
  });

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
