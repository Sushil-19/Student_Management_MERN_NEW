import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
  name: string;
  age: number;
  email: string;
  password: string;
  createdDate: Date;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  createdDate: { type: Date, default: Date.now },
});

const User = model<IUser>('User', userSchema);

export default User;
