import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreatePostService } from '@/services/CreatePostService';

export class PostController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, description, image } = request.body;

    const userId = request.user.id;

    const createPostService = container.resolve(CreatePostService);

    await createPostService.execute({
      name,
      userId,
      description,
      image,
    });

    return response.status(200).send();
  }
}
