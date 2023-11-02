import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
dotenv.config()
import { connectDb } from './config/db.js'
import userRoutes from './routes/user.route.js'

const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use('/api/users', userRoutes)

app.get('/', (req, res) => {res.json({message: 'Hello World'})})

connectDb();

app.listen(process.env.PORT, () => {
    console.log(`Server Listening on http://localhost:${process.env.PORT}/`)
})
