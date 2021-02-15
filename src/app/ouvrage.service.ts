import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Ouvrage } from "./model/ouvrage";

@Injectable({
  providedIn: "root"
})
export class OuvrageService {
  // https://my-json-server.typicode.com/HatemAbid/bibliotheque
  private ouvrages: Ouvrage[];
  link = "https://my-json-server.typicode.com/HatemAbid/bibliotheque";
  constructor(private http: HttpClient) {}

  getPersonnes(): Observable<Ouvrage[]> {
    // return this.personnes;
    return this.http.get<Ouvrage[]>(this.link + '/ouvrages');
  }
}
