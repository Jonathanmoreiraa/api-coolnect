import mongoose from 'mongoose';

import { IPostMongooseSchema } from '@/infra/entities/Post';
import { IUserMongooseSchema } from '@/infra/entities/User';
import AppError from '@/shared/errors/AppError';

interface IRequest {
  name: string;
  userId: string;
  description: string;
  image?: string;
}

export class CreatePostService {
  public async execute({
    name,
    userId,
    description,
    image,
  }: IRequest): Promise<void> {
    const Users = mongoose.model<IUserMongooseSchema>('users');
    const Posts = mongoose.model<IPostMongooseSchema>('posts');

    const user = await Users.findOne({ userId });

    if (user) {
      throw new AppError('User already exists', '409', 409);
    }

    const newPost = new Posts({
      name,
      userId,
      description,
      image,
    });

    await newPost.save();
  }
}
