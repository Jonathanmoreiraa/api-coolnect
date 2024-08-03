import mongoose, { Schema } from 'mongoose';

import { IPost } from '@/interfaces/IPost';

export interface IPostMongooseSchema
  extends Document,
    IPost,
    Omit<IPost, '_id'> {}

const PostSchema = new Schema(
  {
    name: {
      type: String,
    },
    userId: {
      type: String,
      ref: 'users',
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<IPostMongooseSchema>('posts', PostSchema);
