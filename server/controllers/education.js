import Education from '../models/education.js';

// GET all education entries
export const getAllEducations = async (req, res) => {
    try {
        const educations = await Education.find();
        res.status(200).json(educations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET education by ID
export const getEducationById = async (req, res) => {
    try {
        const education = await Education.findById(req.params.id);
        if (!education) {
            return res.status(404).json({ message: 'Education entry not found' });
        }
        res.status(200).json(education);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// POST create new education entry
export const createEducation = async (req, res) => {
    const newEducation = new Education(req.body);
    try {
        const savedEducation = await newEducation.save();
        res.status(201).json(savedEducation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// PUT update education by ID
export const updateEducation = async (req, res) => {
    try {
        const updatedEducation = await Education.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedEducation) {
            return res.status(404).json({ message: 'Education entry not found' });
        }
        res.status(200).json(updatedEducation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// DELETE education by ID
export const deleteEducation = async (req, res) => {
    try {
        const deletedEducation = await Education.findByIdAndDelete(req.params.id);
        if (!deletedEducation) {
            return res.status(404).json({ message: 'Education entry not found' });
        }
        res.status(200).json({ message: 'Education deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
