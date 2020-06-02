
var port = process.env.PORT || 3002;
const express = require('express');
var cors = require('cors')
const app = express();
app.use(cors())

app.use(express.json());

const apiRoute = require ('./routes/api')
app.use('/api',apiRoute)
const apiRoute2 = require ('./routes/stream')
app.use('/stream',apiRoute2)
//=>route

app.listen (port, ()=> console.log('server_started'))