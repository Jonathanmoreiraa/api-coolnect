import { Router } from 'express';

import { authenticateRouter } from '@/infra/http/routes/authenticate.routes';
import { exampleRouter } from '@/infra/http/routes/example.routes';
import { postRouter } from '@/infra/http/routes/post.routes';
import { userRouter } from '@/infra/http/routes/user.routes';

const routes = Router();

routes.use('/example', exampleRouter);
routes.use('/users', userRouter);
routes.use('/posts', postRouter);
routes.use(authenticateRouter);

export { routes };
