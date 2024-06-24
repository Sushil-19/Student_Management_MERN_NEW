import { Schema, model, Document } from 'mongoose';

interface IEnrollment extends Document {
  student: Schema.Types.ObjectId;
  course: Schema.Types.ObjectId;
  enrollmentDate: Date;
  grade: string;
}

const enrollmentSchema = new Schema<IEnrollment>({
  student: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
  course: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
  enrollmentDate: { type: Date, default: Date.now },
  grade: { type: String },
});

const Enrollment = model<IEnrollment>('Enrollment', enrollmentSchema);

export default Enrollment;
