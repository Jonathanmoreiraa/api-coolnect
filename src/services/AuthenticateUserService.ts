import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import mongoose from 'mongoose';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';

import auth from '@/configs/auth';
import { IUserMongooseSchema } from '@/infra/entities/User';
import { IUserTokensMongooseSchema } from '@/infra/entities/UserTokens';
import { IDateProvider } from '@/shared/container/providers/DataProvider/IDateProvider';
import AppError from '@/shared/errors/AppError';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    email: string;
    name: string;
    phone: string;
  };
  token: string;
  refreshToken: string | undefined;
}

export class AuthenticateUserService {
  constructor(private dateProvider: IDateProvider) {}
  async execute({ email, password }: IRequest): Promise<IResponse> {
    const User = mongoose.model<IUserMongooseSchema>('users');

    const UserTokens = mongoose.model<IUserTokensMongooseSchema>('usersTokens');

    const user = await User.findOne({ email }).select('+password');

    const { expires_in_token, secret_token, expires_refresh_token_days } = auth;

    if (!user) {
      throw new AppError('Email or password incorrect', '401', 401);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError('Email or password incorrect', '401', 401);
    }

    const token = sign({}, secret_token, {
      subject: user._id.toString(),
      expiresIn: expires_in_token,
    });

    const refresh_token_expires_date = this.dateProvider.addDays(
      expires_refresh_token_days,
    );

    await UserTokens.deleteOne({ userId: user._id.toString() });

    const refresh_token = await UserTokens.create({
      userId: user._id.toString(),
      expire: refresh_token_expires_date,
      token: uuidv4(),
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email,
        phone: user.phone,
      },
      refreshToken: refresh_token.token,
    };
    return tokenReturn;
  }
}
