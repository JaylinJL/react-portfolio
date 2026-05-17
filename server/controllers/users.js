import UsersModel from '../models/users.js';
import generateToken from '../utils/jwt.js';

export const getAllUsers = async (req, res) => {
    try {
        const users = await UsersModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getUsersById = async (req, res) => {
    try {
        const user = await UsersModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }   
        res.status(200).json(user);
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Register(create a new user)
export const createUser = async (req, res) => {
    try {
        const newUser = new UsersModel({
            ...req.body,
            role: 'user' // Default role is user
        });
        const savedUser = await newUser.save();
        
        // Generate JWT token after user registration
        const token = generateToken(savedUser)

        res.status(201).json({message: 'User registered successfully', user: savedUser, token});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Login(signin) a user
export const signInUser = async (req, res) => {
    try {
        const { email, password } = req.body; // Extract email and password from request body
        const user = await UsersModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isPasswordValid = await user.comparePassword(password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        }
        const token = generateToken(user); 
        
        res.status(200).json({ message: "Login successful", user, token});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Logout(signout) a user
export const signOutUser = async (req, res) => {
    try {
        res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

    

export const updateUser = async (req, res) => {
    try {
        const updatedUser = await UsersModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }  
        );
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(updatedUser);
    } catch (error) {   
        res.status(500).json({ message: error.message });
    }   
}

export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await UsersModel.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteAllUsers = async (req, res) => {
    try {
        await UsersModel.deleteMany({});
        res.status(200).json({ message: "All users deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}




