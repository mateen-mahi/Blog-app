import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    role: {
        type: String,
        default: 'user',
    },
    password: {
        type: String,
  default:"external provider",
    },
}, { timestamps: true });

export const User = mongoose.models.Users || mongoose.model('Users', userSchema);
