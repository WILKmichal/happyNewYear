export interface UserInterface{
    iduser?: number | null;
    firstname?: string | null;
    lastname?: string | null;
    email?: string | null;
    sexe?: boolean | null;
    role?: string | null;
    date_naissance?: string | null;
    createdAT?: string | null;
    activated?: boolean | null;
    updatedAt?: string | null;
    nombre_Essai?: number | null;
    date_deverouillage?: string | null;
    password?: string | null;
    save(): Promise < number > ;
}