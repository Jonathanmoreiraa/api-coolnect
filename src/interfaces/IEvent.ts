import { Schema } from 'mongoose';

export interface IEvent {
  _id: Schema.Types.ObjectId;
  name: string;
  userId: Schema.Types.ObjectId;
  dateEvent: Date;
  createdAt: Date;
  updatedAt: Date;
}
