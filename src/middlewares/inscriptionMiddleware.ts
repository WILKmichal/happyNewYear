import EmailException from '../exceptions/EmailException';
import PasswordException from '../exceptions/PasswordException';
import { Request, Response } from 'express';
import DateException from '../exceptions/DateException';

export const registerMiddleware = (req: Request, res: Response, next: () => void) => {

    let data: any = req.body;

    //TODO regex firstname
    //TODO regex lastname
    //TODO regex sexe
    const champsRequire = [`firstname`, `lastname`, `password`, `email`, `date_naissance`, `sexe`]
    let statusReq: number = 400;

    try {

        let error: boolean = true;
        for (const require in champsRequire) {
            error = true;
            for (const champs in data) {
                if (champs === champsRequire[require])
                    error = false;
            }
            if (error) {
                throw new Error(`Une ou plusieurs données obligatoire sont manquantes`)
            }
        }

        if (EmailException.checkEmail(data.email)) // Check valid syntaxe email
        {
            statusReq = 409;
            throw new EmailException();
        }
        if (!PasswordException.isValidPassword(data.password)) // Check valid syntaxe password
        {
            statusReq = 409;
            throw new PasswordException();
        }
        if (!DateException.checkDate(data.date_naissance)) // Check valid syntaxe date_naissance
        {
            statusReq = 409;
            throw new DateException();
        }

        next()

    } catch (err) {
        return res.status(statusReq).json({ error: true, message: err.message }).end();
    }
}