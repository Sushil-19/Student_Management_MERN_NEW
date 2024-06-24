import { Schema, model, Document } from 'mongoose';

interface IStudent extends Document {
  name: string;
  age: number;
  major: string;
  enrollmentDate: Date;
}

const studentSchema = new Schema<IStudent>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  major: { type: String, required: true },
  enrollmentDate: { type: Date, default: Date.now },
});

const Student = model<IStudent>('Student', studentSchema);

export default Student;
