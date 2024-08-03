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

    avatar: {
      type: String,
    },
    active: {
      type: String,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<IUserMongooseSchema>('users', UserSchema);
