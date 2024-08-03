import { Request, Response } from 'express';

import { AuthenticateUserService } from '@/services/AuthenticateUserService';
import { DayjsDateProvider } from '@/shared/container/providers/DataProvider/implementations/DayJsDateProvider';

export class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const dateProvider = new DayjsDateProvider();

    const authenticateUserService = new AuthenticateUserService(dateProvider);

    const token = await authenticateUserService.execute({
      password,
      email,
    });

    return response.json(token);
  }
}
