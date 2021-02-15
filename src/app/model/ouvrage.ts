export class Ouvrage {
  id: number;
  titre: string;
  datepublication: string;
  prix: number;

  constructor(
    id: number,
    titre: string,
    datepublication: string,
    prix: number
  ) {
    this.id = id;
    this.titre = titre;
    this.datepublication = datepublication;
    this.prix = prix;
  }
}
