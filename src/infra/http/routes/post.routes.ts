import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import { PostController } from '../controller/PostController';

const postRouter = Router();
const postController = new PostController();

postRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      userId: Joi.string().required(),
      description: Joi.string(),
      image: Joi.string().required(),
    },
  }),
  postController.create,
);

export { postRouter };
