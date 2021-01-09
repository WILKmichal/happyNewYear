import { Request, Response } from 'express';
import { Router } from 'express';


const route: Router = Router();

route.get('payment',(req: Request, res: Response) => {
    //
    return res.status(201).end();
})

export { route as paymentRoute }