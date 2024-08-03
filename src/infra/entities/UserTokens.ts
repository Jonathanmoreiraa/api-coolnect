import mongoose, { Schema } from 'mongoose';

import { IUserTokens } from '@/interfaces/IUserTokens';

export interface IUserTokensMongooseSchema
  extends Document,
    IUserTokens,
    Omit<IUserTokens, '__id'> {}

const UserTokensSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
    expire: {
      type: Date,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<IUserTokensMongooseSchema>(
  'usersTokens',
  UserTokensSchema,
);
