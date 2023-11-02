import User from '../models/User.js'

export const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        console.log(err)
    }
}

export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.json(user)
    } catch (err) {
        console.log(err)
    }
}

export const updateUser = async (req, res) => {
    try {
        const { id: _id } = req.params;
        await User.update({ _id }, req.body)
        res.json({ message: 'User updated successfully' })
    } catch (err) {
        console.log(err)
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id: _id } = req.params;
        await User.remove({ _id })
        res.json({ message: 'User deleted successfully' })
    } catch (err) {
        console.log(err)
    }
}
