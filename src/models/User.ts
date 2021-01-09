import MySQL from '../db/MySQL';

export default class User {


    public iduser?: number | null;
    public firstname?: string | null;
    public lastname?: string | null;
    public email?: string | null;
    public sexe?: boolean | null;
    public role?: string | null;
    public date_naissance?: string | null;
    public createdAT?: string | null;
    public activated?: boolean | null;
    public updatedAt?: string | null;
    public nombre_Essai?: number | null;
    public date_deverouillage?: string | null;
    public password?: string | null;

    protected table: string = 'user';
    static iduser: any;

    constructor(user: User | null, firstname: string = "", lastname: string = "", email: string = "", sexe: boolean | null = null, role: string = "user", date_naissance: string = "", createdAT: string = User.addMonthsToCurrentDate(0), activated : boolean = false, updatedAt : string = User.addMonthsToCurrentDate(1), nombre_Essai : number =0,date_deverouillage : string = '',password : string = '' ) {
        if (user === null){
            this.firstname = firstname;
            this.lastname = lastname;
            this.email = email;
            this.sexe = sexe;
            this.role = role;
            this.date_naissance = date_naissance;
            this.createdAT = createdAT;
            this.activated = activated;
            this.updatedAt = updatedAt;
            this.nombre_Essai = nombre_Essai;
            this.date_deverouillage = date_deverouillage;
            this.password = password;
        }
        else{
            this.firstname = user.firstname;
            this.lastname = user.lastname;
            this.email = user.email;
            this.sexe = user.sexe;
            this.role = user.role;
            this.date_naissance = user.date_naissance;
            this.createdAT = user.createdAT;
            this.activated = user.activated;
            this.updatedAt = user.updatedAt;
            this.nombre_Essai = user.nombre_Essai;
            this.date_deverouillage = user.date_deverouillage;
            this.password = user.password;
            this.iduser = user.iduser;
        }

    }

    get id() : number {
        return<number> this.iduser;
    }

    get attributInsert(): Array < string > {
        return ['firstname', 'lastname', 'email', 'sexe', 'role', 'date_naissance', 'createdAT','activated','updateAt','nombre_Essai','date_deverouillage','password']
    }

    static addMonthsToCurrentDate(addedMonth : number) {
        let currentDate = new Date();
        let cDay = currentDate.getDate()
        let cMonth = currentDate.getMonth() + 1
        let cYear = currentDate.getFullYear()
        return(cDay +'-' + (cMonth + addedMonth) + '-' + cYear)
    }

    save(): Promise < number > {
        return new Promise((resolve, reject) => {
            MySQL.insert(this.table, this).then((id: number) => {
                this.iduser = id;
                console.log(`Save ${this.table}`);
                resolve(id)
            }).catch((err) => {
                console.log(err);
                reject(false)
            })
        })
    };

    static select(where: any) {
        return new Promise((resolve, reject) => {
            MySQL.select('user', where).then((arrayPersonne: Array < any > ) => {
                    let data: Array < User > = [];
                    for (const personne of arrayPersonne) {
                        personne.dateNaiss = new String(personne.dateNaiss)
                        personne.id = personne.idpersonne;
                        data.push(new User(personne));
                    }
                    console.log(data);
                    resolve(data)
                })
                .catch((err: any) => {
                    console.log(err);
                    reject(false)
                });
        })
    }
    static isExiste(email: string) {
        return new Promise((resolve, reject) => {
            MySQL.select('user', { email: email }).then((arrayClient: Array < any > ) => {
                    resolve((arrayClient.length > 0))
                })
                .catch((err: any) => {
                    console.log(err);
                    reject(false)
                });
        })
    }

}

