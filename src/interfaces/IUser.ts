import { Schema } from 'mongoose';

export interface IUser {
  _id: Schema.Types.ObjectId;
  name: string;
  phone: string;
  email: string;
  password: string;
  avatar: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}
