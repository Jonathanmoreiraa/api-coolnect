import { celebrate, Joi, Segments } from 'celebrate';
import { NextFunction, Request, Response, Router } from 'express';

import { authenticationHub } from '@/shared/infra/http/middlewares/authenticationHub';
import { ensureAuthenticated } from '@/shared/infra/http/middlewares/ensureAuthenticated';

import { PostController } from '../controller/PostController';

const postRouter = Router();
const postController = new PostController();

const middlewareWrapper = (
  request: Request,
  response: Response,
  next: NextFunction,
) =>
  authenticationHub(request, response, next, {
    authMiddlewares: [ensureAuthenticated],
  });

postRouter.post(
  '/',
  middlewareWrapper,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string(),
      image: Joi.string().required(),
    },
  }),
  postController.create,
);

export { postRouter };
