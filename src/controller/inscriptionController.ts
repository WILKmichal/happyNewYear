import { decode, sign } from 'jsonwebtoken';
import { Request, Response } from 'express';

export const inscriptionController = (req: Request, res: Response) => {
    let data: any = req.body;
    console.log(data)

    try {
        // if (await Client.isExiste(data.email))
        //     throw new Error(`Email exist!`)

        // const personne = new Personne(null, data.prenom, data.nom, data.dateNaiss, data.pays, data.adresse, data.ville, data.zipcode);
        // await personne.save();
        // const pass = await PasswordException.hashPassword(data.password);
        // const client = new Client(personne, data.email, pass);
        // await client.save();

        // const theToken: any = await sign({ id: client.personne_idpersonne, name: client.fullname }, < string > process.env.JWT_KEY, { expiresIn: '1m' })

        // const token = {
        //     token: theToken,
        //     expired: await ( < any > decode(theToken)).exp
        // }
        return res.status(201).json("lel");

    } catch (err) {
        return res.status(401).json({ error: true, message: "err.message" }).end();
    }
}
