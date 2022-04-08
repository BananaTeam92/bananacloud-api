import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isPremium: {
        type: Boolean,
        default: false
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
   
    pictures: [],
})

export const User = mongoose.model('User', userSchema)
