const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 4000;
const {dbConnection} = require('./database/config');
var cors = require('cors')

/* crear servidor express */
const app = express();

/* base de datos */
dbConnection();

/* CORS */
app.use(cors());

/* directorio publico */
app.use( express.static('public') );

/* lectura y parseo del body */
app.use(express.json());


/* rutas */
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en puerto: ${PORT}`);
});
