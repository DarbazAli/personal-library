import bodyParser from 'body-parser'
import express from 'express'
import helmet from 'helmet'
import methodOverride from 'method-override'

const configApp = (app) => {
    // setup template engine
    app.set('views', './views')
    app.set('view engine', 'pug')

    // serve static files
    app.use(express.static(process.cwd() + '/public'))
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())

    // security
    app.use(helmet.xssFilter())
    app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }))
    app.use(helmet.frameguard({ action: 'deny' }))
    app.use(helmet.noSniff())
    app.use(helmet.ieNoOpen())
    app.use(helmet.hsts())

    // method override
    app.use(methodOverride('_method'))
}

export default configApp
