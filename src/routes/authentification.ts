import { Router } from 'express';
import { Request, Response } from 'express';
import { LoginController } from '../controller/loginController';
import { loginMiddleware } from '../middlewares/loginMiddleware';

const route: Router = Router();

route.post('/',loginMiddleware,LoginController,(req: Request, res: Response) => {
    //
    return res.status(201).end();
})

export { route as LoginRoute }