import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: /.+@.+\..+/ //Regex simple email validation xxx@xxxx.xx
    },
    password: {
        type: String,
        required: true,
    },
    
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
});

usersSchema.pre('save', async function(next) {
    if(this.isModified('password') || this.isNew) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

usersSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

export default mongoose.model('Users', usersSchema);