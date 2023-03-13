import express from 'express'
import http from 'http'
import path from 'path'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import { PrismaSessionStore } from '@quixo3/prisma-session-store'
import { PrismaClient } from '@prisma/client'
import webRoutes from '../routes/web'
import apiRoutes from '../routes/api'

const app = express()
const PORT = process.env.PORT || 3000

export default class Application {
  constructor() {
    this.setupExpress()
    this.setConfig()
    this.setRouter()
  }

  setupExpress() {
    const server = http.createServer(app)
    server.listen(PORT, () => console.log(`Server Is Running On http://localhost:${PORT}`))
  }

  setConfig() {
    app.use(express.static('public'))
    app.set('view engine', 'ejs')
    app.set('views', path.resolve('./resources/views'))
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    // app.use(validator)
    app.use(
      session({
        // cookie: {
        //   maxAge: 7 * 24 * 60 * 60 * 1000, // ms
        // },
        secret: process.env.SECRET_KEY || '',
        resave: true,
        saveUninitialized: true,
        store: new PrismaSessionStore(new PrismaClient(), {
          checkPeriod: 2 * 60 * 1000,
          dbRecordIdIsSessionId: true,
          dbRecordIdFunction: undefined,
        }),
      }),
    )
    app.use(cookieParser(process.env.SECRET_KEY))
  }

  setRouter() {
    app.use(webRoutes)
    app.use('/api', apiRoutes)
  }
}
