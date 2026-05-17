import express from 'express';
import { createproject, deleteProject, getAllProjects, getProjectById, updateProject } from '../controllers/project.js';
import authMiddleware from '../middlewares/auth.js';
import adminAuth from '../middlewares/adminAuth.js';

const router = express.Router();

// HTTP Verbs for RESTful API GET, POST, PUT, DELETE

// GET /api/projects
router.get('/', getAllProjects);

// GET /api/projects/:id
router.get('/:id', getProjectById);

// POST /api/projects
router.post('/', authMiddleware, adminAuth, createproject);

// PUT /api/projects/:id
router.put('/:id', authMiddleware, adminAuth, updateProject);

// DELETE /api/projects/:id
router.delete('/:id', authMiddleware, adminAuth, deleteProject)

export default router;