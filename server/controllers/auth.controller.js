import User from '../models/User.js';
import bcrypt from 'bcryptjs'
import { errorHandler } from '../utils/error.js';
import { sign } from '../utils/jwt.js'

export const signup = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        if (username && email && email.includes('@') && password && password.length > 5) {
            const usernameFound = await User.find({username})
            const emailFound = await User.find({email})
            if (emailFound.length) {
                next(errorHandler(400, "Email already registered!"))
            } else if (usernameFound.length) {
                next(errorHandler(400, "Username already exists!"))
            } else {
                const hashedPassword = await bcrypt.hash(password, 12)
                const newUser = new User({username, email, password : hashedPassword})
                const user = await newUser.save();
                sign({id: user._id}, process.env.JWT_SECRET, res)
                res.status(201).json({message: "User created successfully."})
            }
        } else {
            res.status(400).json({ sucess: false, message: "Invalid Credentials", statusCode: 201})
        }
    } catch (error) {
        next(error)
    }
}

export const signin = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const existingUser = await User.findOne({email})
        if (existingUser) {
            const passMatch = await bcrypt.compare(password, existingUser.password)
            if (passMatch) {
                sign({id: existingUser._id}, process.env.JWT_SECRET, res)
                const { password, ...rest } = existingUser._doc;
                res.status(200).json(rest)
            } else {
                next(errorHandler(400, 'Incorrect Password'))
            }
        } else {
            next(errorHandler(400, "Email not found!"))
        }
    } catch (err) {
        next(err)
    }
}