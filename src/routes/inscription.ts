import { Router } from 'express';
import { Request, Response } from 'express';
import { inscriptionController } from '../controller/inscriptionController';
import { registerMiddleware } from '../middlewares/inscriptionMiddleware';

const route: Router = Router();

route.post('/',registerMiddleware,inscriptionController,(req: Request, res: Response) => {
    //
    return res.status(201).end();
})

export { route as InscriptionRoute }