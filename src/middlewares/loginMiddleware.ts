import EmailException from '../exceptions/EmailException';
import PasswordException from '../exceptions/PasswordException';
import { Request, Response } from 'express';
import DateException from '../exceptions/DateException';

export const loginMiddleware = (req: Request, res: Response, next: () => void) => {

    let data: any = req.body;
    console.log(data);

    const champsRequire = [`Email`, `Password`]
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
                throw new Error(`Email/password manquants`)
            }
        }

        if (EmailException.checkEmail(data.Email)) // Check valid syntaxe email
        {
            statusReq = 409;
            throw new EmailException();
        }
        console.log("ceci est le mot de passe " + data.Password);

        if (typeof data.Password === "string") {
            console.log('psd is a string');
        }

        if (!PasswordException.isValidPassword(data.Password)) // Check valid syntaxe password
        {
            statusReq = 409;
            throw new PasswordException();
        }
        next()

    } catch (err) {
        return res.status(statusReq).json({ error: true, message: err.message }).end();
    }
}