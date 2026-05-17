import express from 'express';
import {getAllEducations, getEducationById, createEducation, deleteEducation, updateEducation} from '../controllers/education.js';
import authMiddleware from '../middlewares/auth.js';
import adminAuth from '../middlewares/adminAuth.js';

const router = express.Router();

router.get('/', getAllEducations);

router.get('/:id', getEducationById);

router.post('/', authMiddleware, adminAuth, createEducation);

router.put('/:id', authMiddleware, adminAuth, updateEducation);

router.delete('/:id', authMiddleware, adminAuth, deleteEducation);

export default router;
