const express = require('express');
const app = express(); 
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}


app.use(logger);



// app.get('/', (req, res) => res.send('Hello World!'));
// app.get('/homepage', (req, res) => res.send('Selamat Datang di bingle!'));
// app.get('/about', (req, res) => res.send('Ini adalah halaman about'));
// app.get('/contact', (req, res) => res.send('Ini adalah halaman contact'));
// app.get('/products', (req, res) => 
//     {
//         res.json([
//             "Apple",
//             "Redmi",
//             "Samsung",
//             "Oppo",
//             "Vivo",
//         ]);
//     }
// );

// app.get('/orders', (req, res) => { 
//     res.json([
//         {
//             id:1,
//             paid: false,
//             user_id: 1,
//         },
//         {
//             id:2,
//             paid: false,
//             user_id: 1,
//         }
//     ])
// })

app.get('/', (req, res) => {
    res.send('Ini adalah endpoint')
})

const router = require('./router');
app.use(router);



app.listen(3000,() => {console.log('Server nyala')})


// app.listen(port, () => console.log(`Example app listening at http://localhost: ${port}`));

