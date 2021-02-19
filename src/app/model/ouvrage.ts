import { Categorie } from "./categorie";
export class Ouvrage {
  id: number;
  titre: string;
  datepublication: string;
  prix: number;
  categorie: Categorie

  constructor(
    id: number,
    titre: string,
    datepublication: string,
    prix: number,
    categorie: Categorie
  ) {
    this.id = id;
    this.titre = titre;
    this.datepublication = datepublication;
    this.prix = prix;
    this.categorie = categorie;
  }
}
