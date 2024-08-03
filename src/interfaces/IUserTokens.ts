import { Schema } from 'mongoose';

export interface IUserTokens {
  _id: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  token: string;
  expire: string;
  createdAt: Date;
  updatedAt: Date;
}
