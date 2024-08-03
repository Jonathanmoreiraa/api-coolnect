import { hash } from 'bcryptjs';
import mongoose from 'mongoose';

import { IUserMongooseSchema } from '@/infra/entities/User';
import AppError from '@/shared/errors/AppError';

interface IRequest {
  name: string;
  phone: string;
  email: string;
  avatar?: string;
  password: string;
  questions?: {
    firstAnimal?: string;
    firstTeacher?: string;
    cityFathers?: string;
  };
}

export class CreateUserService {
  public async execute({
    name,
    phone,
    email,
    avatar,
    password,
    questions,
  }: IRequest): Promise<void> {
    const Collaborator = mongoose.model<IUserMongooseSchema>('users');

    const user = await Collaborator.findOne({ email });

    if (user) {
      throw new AppError('User already exists', '409', 409);
    }

    const passwordHash = await hash(password, 8);

    const collaborator = new Collaborator({
      name,
      phone,
      email,
      avatar,
      password: passwordHash,
      questions,
    });

    await collaborator.save();
  }
}
