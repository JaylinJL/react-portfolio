import dotenv from 'dotenv';
dotenv.config({ path: './server/.env' });
console.log("ENV CHECK:", process.env);

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

import contactsRouter from './routes/contacts.js';
import usersRouter from './routes/users.js';

console.log("Mongo URI:", process.env.MONGO_URI);


import path from 'path';
import { fileURLToPath } from 'url';

// Create _dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import ProjectRouter from './routes/project.js';
import educationRouter from './routes/education.js';


mongoose.connect(process.env.MONGO_URI);
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
connection.once('open', () => {
  console.log('Connected to MongoDB');
});

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api', (req, res) => {res.status(200).json({ message: 'Welcome to My Portfolio application.' });});
app.use('/health', (req, res) => {res.status(200).json({ message: 'Server is running' });});
app.use('/api/contacts', contactsRouter);
app.use('/api/users', usersRouter);
app.use('/api/projects', ProjectRouter);
app.use('/api/education', educationRouter);

app.use('/api/data', (req, res) => {
  res.status(200).json({ message: 'Hello from backend' });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'dist')));
  app.get(/^\/(?!api).*$/, (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

