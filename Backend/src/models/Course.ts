import { Schema, model, Document } from 'mongoose';

interface ICourse extends Document {
  title: string;
  description: string;
  credits: number;
}

const courseSchema = new Schema<ICourse>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  credits: { type: Number, required: true },
});

const Course = model<ICourse>('Course', courseSchema);

export default Course;
