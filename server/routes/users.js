import express from 'express';
import { getAllUsers, getUsersById, createUser, updateUser, deleteUser, deleteAllUsers, signInUser, signOutUser } from '../controllers/users.js';

const router = express.Router();

router.get('/', getAllUsers);

router.get('/:id', getUsersById);

//register a new user
router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

router.delete('/', deleteAllUsers);

// SignIn a user PST /api/users/signin
router.post('/signin', signInUser);

// SignOut a user PST /api/users/signout
router.post('/signout', signOutUser);

export default router
