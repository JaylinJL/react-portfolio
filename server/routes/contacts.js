import express from 'express';
import {
    getAllContacts,
    getContactsById,
    createContact,
    updateContact,
    deleteContact,
    deleteAllContacts
} from '../controllers/contacts.js';

import authMiddleware from '../middlewares/auth.js';
import adminAuth from '../middlewares/adminAuth.js';

const router = express.Router();

// Admin
router.get('/', authMiddleware, adminAuth, getAllContacts);
router.get('/:id', authMiddleware, adminAuth, getContactsById);
router.put('/:id', authMiddleware, adminAuth, updateContact);
router.delete('/:id', authMiddleware, adminAuth, deleteContact);
router.delete('/', authMiddleware, adminAuth, deleteAllContacts);

// Contact form
router.post('/', createContact);

export default router;