import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
dotenv.config()
import { connectDb } from './config/db.js'

const app = express()
app.use(cors())
app.use(morgan('dev'))

connectDb();

app.listen(() => {
    console.log(`Server Listening on http://localhost:${process.env.PORT}/`)
})
