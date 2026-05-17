import mongoose from 'mongoose';

const contactsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }, 

    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    message: {
    type: String,
    required: true,
    }
});

export default mongoose.model('Contacts', contactsSchema);