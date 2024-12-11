import express from 'express';
import connectDB from './config/db.js';
import cors from "cors";

import authRoute from './routes/authRoutes.js';
import userRoute from './routes/userRoutes.js';
import postRoute from './routes/postRoutes.js';
import communityRoute from './routes/communityRoutes.js';

const app = express();

// connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// base routes
app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/post", postRoute);
app.use("/comm", communityRoute);

app.get('/', (req, res) => res.send('Hello, World!'));

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
