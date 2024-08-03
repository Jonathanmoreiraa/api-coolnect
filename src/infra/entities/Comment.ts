import mongoose, { Schema } from 'mongoose';

import { IComment } from '@/interfaces/IComment';

export interface ICommentsMongooseSchema
  extends Document,
    IComment,
    Omit<IComment, '_id'> {}

const CommentsSchema = new Schema(
  {
    text: {
      type: String,
    },
    postId: {
      type: Schema.Types.ObjectId,
      ref: 'posts',
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<ICommentsMongooseSchema>(
  'comments',
  CommentsSchema,
);
