import { decode, sign } from 'jsonwebtoken';
import { Request, Response } from 'express';
import PasswordException from '../exceptions/PasswordException';
import User from '../models/User';


export const LoginController = async (req: Request, res: Response) => {
    let data: any = req.body;
    try {
        let client: any = await User.select({ email: data.Email });
        if (client.length < 0)
            throw new Error(`Email don't exist!`)
        client = client[0];
        console.log("client mot de passse ashe  "+ client.password );
        console.log("mot de passe conne         "+ data.Password );

        // let arr : string = "$2b$10$0YWdJuo.FqmgzUFQdOwh4O39TEwr8ISXz8xMq1";
        // let sdb : string = "$2b$10$0YWdJuo.FqmgzUFQdOwh4O39TEwr8ISXz8xMq1";

        const isOk = await PasswordException.comparePassword(data.Password, client.password);
        // const isOk = await PasswordException.comparePassword(arr, sdb);
        console.log(isOk);

        if (!isOk)
            throw new Error(`User is undefined!`)

        const theToken: any = await sign({ id: client.personne_idpersonne, name: client.fullname }, < string > 'dswdssdsds56464646', { expiresIn: '1m' })

        const token = {
            token: theToken,
            expired: await ( < any > decode(theToken)).exp
        }
        return res.status(201).json(token);
    } catch (err) {
        return res.status(401).json({ error: true, message: err.message }).end();
    }
}
