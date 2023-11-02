import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export const connectDb = () => {
    mongoose
        .connect(process.env.MONGODB_URL)
        .then(() => {
            console.log('Connected to MongoDB successfully...')
        })
        .catch((err) => {
            console.log(err)
        })
}
