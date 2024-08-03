import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserService } from '@/services/CreateUserService';

export class UserController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, phone, email, avatar, password } = request.body;

    const createUserService = container.resolve(CreateUserService);

    await createUserService.execute({
      name,
      phone,
      email,
      avatar,
      password,
    });

    return response.status(200).send();
  }
}
