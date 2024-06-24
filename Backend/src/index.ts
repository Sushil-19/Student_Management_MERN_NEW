// src/index.ts
import express from 'express';
import connectDB from './config/db';
import studentRoutes from './routes/studentRoutes';
import courseRoutes from './routes/courseRoutes';
import enrollmentRoutes from './routes/enrollmentRoutes';
import userRoutes from './routes/userRoutes';

const app = express();
const port = 3000;

app.use(express.json());

connectDB();

app.use('/user', userRoutes);

app.use('/api', studentRoutes);
app.use('/api', courseRoutes);
app.use('/api', enrollmentRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
