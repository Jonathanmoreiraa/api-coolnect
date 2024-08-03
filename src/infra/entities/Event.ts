import mongoose, { Schema } from 'mongoose';

import { IEvent } from '@/interfaces/IEvent';

export interface IEventMongooseSchema
  extends Document,
    IEvent,
    Omit<IEvent, '_id'> {}

const EventSchema = new Schema(
  {
    name: {
      type: String,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
    dateEvent: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<IEventMongooseSchema>('events', EventSchema);
