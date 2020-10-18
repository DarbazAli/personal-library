'use strict'
console.clear()
const log = console.log

import express from 'express'
import { config } from 'dotenv'

// custom modules
import homeRoute from './routes/homeRoute.js'
import configApp from './config/app.config.js'
import connectDB from './config/db.config.js'

// init express app = main
const app = express()
config() // dotenv

const { PORT } = process.env

// config app
configApp(app)
connectDB() // connect to db

homeRoute(app)

app.listen(PORT, log(`Server running on PORT ${PORT}\n`))
