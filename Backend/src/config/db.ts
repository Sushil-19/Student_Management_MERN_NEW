
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://dubesushil99:Qkbl3KnHo6d2xjPQ@cluster0.nqas9vn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster07');
    console.log('MongoDB connected successfully');
  } catch (err) {
    if (err) {
      console.error('Error connecting to MongoDB:', err);
    } else {
      console.error('Unknown error connecting to MongoDB');
    }
    process.exit(1);
  }
};

export default connectDB;
