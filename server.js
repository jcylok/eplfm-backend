const express = require ('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');

const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

// --------- MiddleWare ---------- //

// CORS - Cross Origin Resource Sharing

// const corsOptions = {
//     origin: ['http://localhost:3000'],
//     credentials: true,
//     optionsSuccessStatus: 200
// };




// --------- Routes ---------- //
app.get('/', (req, res) => {
    res.send('<h1>English Premier League Football Manager</h1>');
})




// --------- Start Server ---------- //

app.listen(process.env.PORT || 4000, () => console.log(`Server connected at http://localhost:${PORT}`))