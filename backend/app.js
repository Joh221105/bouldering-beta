import express from 'express';
import connectDB from './config/db.js';
// TODO: Import routes

const app = express();

// connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => res.send('Hello, World!'));

// base routes
// app.use("/user", userRoutes);
// app.use("/post", postRoutes);
// app.use("/auth", authRoutes);


// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
