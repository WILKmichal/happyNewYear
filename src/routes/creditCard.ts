import { Request, Response } from 'express';
import { Router } from 'express';
import { carte } from '../Payment/payment' ;

const route: Router = Router();

route.put('/',(req: Request, res: Response) => {
    //

    return res.status(201).end();
})



route.put('/user/cart',carte) 


export { route as paymentRoute }