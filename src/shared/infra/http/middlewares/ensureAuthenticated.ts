/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import auth from '@/configs/auth';
import { CheckEventClosestToCurrentDateProvider } from '@/shared/container/providers/CheckEventClosestToCurrentDate/implementations/CheckEventClosestToCurrentDateProvider';
import AppError from '@/shared/errors/AppError';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  const checkEventClosestToCurrentDateProvider =
    new CheckEventClosestToCurrentDateProvider();

  if (!authHeader) {
    throw new AppError('Token missing', '401', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(token, auth.secret_token) as IPayload;

    const eventId = await checkEventClosestToCurrentDateProvider.checkEventDate(
      {
        userId: user_id,
      },
    );

    request.user = {
      id: user_id,
      eventId,
    };

    return next();
  } catch (error) {
    throw new AppError('invalid_token', '401', 401);
  }
}
