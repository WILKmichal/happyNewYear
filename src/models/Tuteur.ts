// import MySQL, { jointureInterface } from "../db/MySQL";
// import EmailException from "../exceptions/EmailException";
// import PasswordException from "../exceptions/PasswordException";
// import User from "./user";

// export default class Client extends User {

//     user_iduser: number | null | undefined;
//     nombre_enfant : number ;

//     protected table: string = 'client';

//     constructor(id: User, nombre_enfant: number = 0) {

//         super(id);
//         super(email);

//         if (EmailException.checkEmail(this.email)) // Check valid syntaxe email
//             throw new EmailException()
//         if (!PasswordException.isValidPassword(password)) // Check valid syntaxe password
//             throw new PasswordException()

//         this.email = email;
//         this.password = password;
//         this.user_iduser = this.id;
//     }

//     /************************* GETTER *************************/

//     get attributInsert(): Array < string > {
//         return ['personne_idpersonne', 'email', 'password']
//     };

//     /************************* STATIC METHOD *************************/

//     static select(where: any) {
//         return new Promise((resolve, reject) => {
//             const join: Array < jointureInterface > = [{
//                 type: 'LEFT',
//                 table: 'personne',
//                 where: {
//                     table: 'client',
//                     foreignKey: 'personne_idpersonne'
//                 }
//             }, {
//                 type: 'LEFT',
//                 table: 'pays',
//                 where: {
//                     table: 'personne',
//                     foreignKey: 'pays_idPays'
//                 }
//             }, ]
//             MySQL.selectJoin('client', join, where).then((arrayClient: Array < any > ) => {
//                     let newPersonne: Personne;
//                     let data: Array < Client > = [];
//                     for (const personne of arrayClient) {
//                         personne.dateNaiss = new String(personne.dateNaiss)
//                         personne.id = personne.idpersonne;
//                         newPersonne = new Personne(personne);
//                         data.push(new Client(newPersonne, personne.email, personne.password));
//                     }
//                     console.log(data);
//                     resolve(data)
//                 })
//                 .catch((err: any) => {
//                     console.log(err);
//                     reject(false)
//                 });
//         })
//     }



//     static isExiste(email: string) {
//         return new Promise((resolve, reject) => {
//             MySQL.select('tuteur', { email: email }).then((arrayClient: Array < any > ) => {
//                     resolve((arrayClient.length > 0))
//                 })
//                 .catch((err: any) => {
//                     console.log(err);
//                     reject(false)
//                 });
//         })
//     }

// }