import { Schema } from 'mongoose';

export interface IPost {
  _id: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  description: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}
