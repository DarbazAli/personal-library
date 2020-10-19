'use strict'
console.clear()
const log = console.log
global.log = log

import express from 'express'
import { config } from 'dotenv'

// custom modules
import configApp from './config/app.config.js'
import connectDB from './config/db.config.js'

// Routes
import indexRoute from './routes/indexRoute.js'
import apiRoute from './routes/apiRoute.js'

// init express app = main
const app = express()
config() // dotenv

const { PORT } = process.env

// config app
configApp(app)
connectDB() // connect to db

app.use('/', indexRoute)

app.use('/api/books', apiRoute)

app.listen(PORT || 3000, log(`Server running on PORT ${PORT}\n`))
