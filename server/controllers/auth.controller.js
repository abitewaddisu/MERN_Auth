import User from '../models/User.js';
import bcrypt from 'bcryptjs'

export const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (username && email && email.includes('@') && password && password.length > 5) {
            const usernameFound = User.find({username})
            const emailFound = User.find({email})
            if (emailFound) {
                res.status(400).json({message: "Username already exist!"})
            } else if (usernameFound) {
                res.status(400).json({message: "Email is already registered!"})
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
        console.log(error)
        res.status(500).json({message: "Server Error!"})
    }
}
