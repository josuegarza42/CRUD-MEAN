const express = require('express');
const conectarDB = require('./config/db');

//servidor
const app = express();

//conectar a la base de datos
conectarDB();

app.use(express.json({ extended: true }));

app.use('/api/productos', require('./routes/producto'));

//rutas
// app.get('/', (req, res) => {
// res.send('Hola Mundo');
// });

app.listen(4000, () => {
    console.log('Server on port 4000');
});