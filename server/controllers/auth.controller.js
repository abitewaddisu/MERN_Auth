import User from '../models/User.js';
import bcrypt from 'bcryptjs'
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        if (username && email && email.includes('@') && password && password.length > 5) {
            const usernameFound = await User.find({username})
            const emailFound = await User.find({email})
            if (emailFound) {
                next(errorHandler(400, "Email already registed!"))
            } else if (usernameFound) {
                next(errorHandler(400, "Username already exists!"))
            } else {
                const hashedPassword = await bcrypt.hash(password, 12)
                const newUser = new User({username, email, password : hashedPassword})
                await newUser.save();
                res.status(201).json({message: "User created successfully."})
            }
        } else {
            res.status(400).json({ message: "Invalid Credentials"})
        }
    } catch (error) {
        next(error)
    }
}
