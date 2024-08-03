import { sign } from 'jsonwebtoken';
import mongoose from 'mongoose';
import { uuid } from 'uuidv4';

import auth from '@/configs/auth';
import { IUserTokensMongooseSchema } from '@/infra/entities/UserTokens';
import { IDateProvider } from '@/shared/container/providers/DataProvider/IDateProvider';
import AppError from '@/shared/errors/AppError';

interface ITokenResponse {
  token: string;
  refreshToken: string | undefined;
}

export class RefreshTokenService {
  constructor(private dateProvider: IDateProvider) {}

  async execute(refreshToken: string): Promise<ITokenResponse> {
    const UserToken = mongoose.model<IUserTokensMongooseSchema>('usersTokens');

    const userToken = await UserToken.findOne({ token: refreshToken });

    const user_id = userToken?.userId;

    if (!userToken) {
      throw new AppError('Refresh Token does not exists!');
    }

    await UserToken.deleteOne(userToken._id);

    const expire = this.dateProvider.addDays(auth.expires_refresh_token_days);

    const refresh_token = await UserToken.create({
      expire,
      token: uuid(),
      userId: user_id,
    });

    const newToken = sign({}, auth.secret_token, {
      subject: user_id?.toString(),
      expiresIn: auth.expires_in_token,
    });

    return {
      refreshToken: refresh_token.token,
      token: newToken,
    };
  }
}
