import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import { UserController } from '../controller/UserController';

const userRouter = Router();
const userController = new UserController();

userRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      phone: Joi.string()
        .pattern(/^[0-9]+$/)
        .messages({
          'string.pattern.base': 'Telefone deve conter apenas números',
          'string.empty': 'O campo telefone está vazio',
        }),
      email: Joi.string().email().required(),
      avatar: Joi.string(),
      password: Joi.string().required(),
    },
  }),
  userController.create,
);

export { userRouter };
