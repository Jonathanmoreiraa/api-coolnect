import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import { AuthenticateUserController } from '../controller/AuthenticateUserController';
import { RefreshTokenController } from '../controller/RefreshTokenController';

const authenticateRouter = Router();

const authenticateUserController = new AuthenticateUserController();
const refreshTokenController = new RefreshTokenController();

authenticateRouter.post(
  '/sessions',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),
  authenticateUserController.handle,
);
authenticateRouter.post('/refresh-token', refreshTokenController.handle);
export { authenticateRouter };
