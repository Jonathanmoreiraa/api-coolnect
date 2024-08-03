import mongoose, { Schema } from 'mongoose';

import { IUser } from '@/interfaces/IUser';

export interface IUserMongooseSchema
  extends Document,
    IUser,
    Omit<IUser, '_id'> {}

const UserSchema = new Schema(
  {
    name: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
      select: false,
    },
    events: [
      {
        _id: {
          type: Schema.Types.ObjectId,
          default: null,
          ref: 'events',
        },
      },
    ],
    questions: {
      firstAnimal: {
        type: String,
      },
      firstTeacher: {
        type: String,
      },
      cityFathers: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<IUserMongooseSchema>('users', UserSchema);
