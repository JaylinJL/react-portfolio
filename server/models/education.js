import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({

    schoolName: { 
        type: String, 
        required: true 
    },
    program: { 
        type: String, 
        required: true 
    },
    startDate: { 
        type: Date, 
        required: true 
    },
    endDate: { 
        type: Date, 
        required: true 
    },
});

export default mongoose.model('Education', educationSchema);
