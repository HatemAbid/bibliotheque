import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Ouvrage } from "./model/ouvrage";

@Injectable({
  providedIn: "root"
})
export class OuvrageService {
  // https://my-json-server.typicode.com/HatemAbid/bibliotheque

  link = "https://my-json-server.typicode.com/HatemAbid/bibliotheque";
  constructor(private http: HttpClient) {}

  getOuvrages(): Observable<Ouvrage[]> {
    // return this.personnes;
    return this.http.get<Ouvrage[]>(this.link + "/ouvrages");
  }

  addOuvrage(ouvrage: Ouvrage): Observable<any> {
    return this.http.post(this.link + "/ouvrages", ouvrage);
  }

  getOuvrageById(id: number): Observable<Ouvrage> {
    return this.http.get<Ouvrage>(this.link + "/ouvrages" + `/${id}`);
  }
}
