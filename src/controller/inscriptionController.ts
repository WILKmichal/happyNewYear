import { decode, sign } from 'jsonwebtoken';
import { Request, Response } from 'express';
import PasswordException from '../exceptions/PasswordException';
import User from '../models/User';

export const inscriptionController = async (req: Request, res: Response) => {
    let data: any = req.body;
    console.log(data)

    try {
        if (await User.isExiste(data.email))
            throw new Error(`Email exist!`)

            const pass = await PasswordException.hashPassword(data.password);

        const personne = new User(null, data.firstname, data.lastname, data.email, data.sexe, undefined, data.date_naissance, User.addMonthsToCurrentDate(0) , false, User.addMonthsToCurrentDate(1),0,User.addMonthsToCurrentDate(1) , pass );
        await personne.save();

        // const pass = await PasswordException.hashPassword(data.password);
        // const user = new User(personne, data.email, pass);
        // await user.save();

        const theToken: any = await sign({ id: User.iduser }, <string>'sdsswdsdsdwrewrtert4e5r4', { expiresIn: '1m' })

        const token = {
            token: theToken,
            expired: await (<any>decode(theToken)).exp
        }
        const JsonRespond = {
            'error': false,
            //TODO mettre les accens je peux pas avec mon clavier
            'message': "L'Utilisateur a bien ete cree avec succes",
            'user': {
                'firstname': personne.firstname,
                'lastname': personne.lastname,
                'email': personne.email,
                'sexe': personne.sexe,
                'role': personne.role,
                'dateNaissance': personne.date_naissance,
                'createdAt': personne.createdAT,
                'updatedAt': personne.updatedAt,
                'subscription': 0
            }
        }
        return res.status(201).json(JsonRespond);

    } catch (err) {
        return res.status(401).json({ error: true, message: "err.message" }).end();
    }
}
