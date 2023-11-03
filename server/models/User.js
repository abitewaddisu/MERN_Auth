import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true, // no two users can have the same email
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true // createdAt and updatedAt
})

// userSchema.pre('save' () => {

// })

const User = mongoose.model('User', userSchema)

export default User