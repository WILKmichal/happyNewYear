export type listeTables = "abonnement" | "carte banquaire" | "chanson" | 'chanson_abonnement' | 'enfant' | 'liste_abonnements' | 'tuteur' | 'user';

interface attributSelectInterface {
    primaryKey: string;
    attribut: Array < string > ;
}

/**
 *
 * List of the property retrieved for the Select method
 * @readonly
 * @type {Array < string >}
 */
const listAttributSelect: Record < listeTables, attributSelectInterface > = { //Constructs a type with a set of properties Keys of type Type. This utility can be used to map the properties of a type to another type.
    "abonnement": {
        primaryKey: `idabonnement`,
        attribut: [`idabonnement`, `nom_station`]
    },
    "carte banquaire": {
        primaryKey: `tuteur_user_iduser`,
        attribut: [`cartNumber`, `month`, `	year` , 'default', 'tuteur_user_iduser' , 'cvc']
    },
    "chanson": {
        primaryKey: `idsong`,
        attribut: [`name_song`, `author_song`, `time_song`, `idsong`, `path_song`]
    },
    "chanson_abonnement": {
        primaryKey: `abonnement_idabonnement`,
        attribut: [`	abonnement_idabonnement`, `chanson_idsong`]
    },
    "enfant": {
        primaryKey: `user_iduser`,
        attribut: [`user_iduser`, `tuteur_user_iduser`]
    },
    "liste_abonnements": {
        primaryKey: `idabonnement`,
        attribut: [`idabonnement`, `abonnement_idabonnement`, `tuteur_user_iduser`, `periode_essai`, `datefin_Essai`, `	expiration_abonnement`]
    },
    "tuteur": {
        primaryKey: `user_iduser`,
        attribut: [`user_iduser`, `nombre_enfant`]
    },
    "user": {
        primaryKey: `iduser`,
        attribut: [`firstname`, `lastname`, `email`, `sexe`, `role`, `date_naissance`, `createdAT`, `activated`,`updateAt`,`nombre_Essai`,`date_deverouillage`,`password`]
    },
};

// export default { listAttributSelect, listeTables };
export default listAttributSelect;