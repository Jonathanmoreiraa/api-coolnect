import { Schema } from 'mongoose';

export interface IComment {
  _id: Schema.Types.ObjectId;
  text: string;
  postId: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
