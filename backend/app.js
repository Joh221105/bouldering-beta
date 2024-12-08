import express from 'express';
import connectDB from './config/db.js';
import authRoute from './routes/authRoutes.js';
import userRoute from './routes/userRoutes.js';
import postRoute from './routes/postRoutes.js';
import communityRoute from './routes/communityRoutes.js';

const app = express();

// connect to database
connectDB();

// Middleware
app.use(express.json());

// base routes
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);
app.use("/api/comm", communityRoute);

app.get('/', (req, res) => res.send('Hello, World!'));

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
