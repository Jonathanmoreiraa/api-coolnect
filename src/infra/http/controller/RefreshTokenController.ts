import { Request, Response } from 'express';

import { RefreshTokenService } from '@/services/RefreshTokenService';
import { DayjsDateProvider } from '@/shared/container/providers/DataProvider/implementations/DayJsDateProvider';

export class RefreshTokenController {
  async handle(request: Request, response: Response): Promise<Response> {
    const refreshToken =
      request.body.refreshToken ||
      request.headers['x-access-token'] ||
      request.query.refreshToken;

    const dateProvider = new DayjsDateProvider();

    const refreshTokenService = new RefreshTokenService(dateProvider);

    const token = await refreshTokenService.execute(refreshToken);

    return response.json(token);
  }
}
