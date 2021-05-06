const express = require('express');
const mongoose = require('mongoose');
const cors =require('cors');

const routes = require('./routes')

require('dotenv').config()

const app = express()

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, console.log('Connected to database'))

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333, () => console.log('Server Running'))