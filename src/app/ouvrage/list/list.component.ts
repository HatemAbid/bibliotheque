import { Component, OnInit } from "@angular/core";
import { Ouvrage } from "../../model/Ouvrage";
import { OuvrageService } from "../../ouvrage.service";
import {ActivatedRoute, Router} from '@angular/router';
import { OauthService } from '../../oauth.service';

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  ouvrages: Ouvrage[];
  ouvrage: Ouvrage;
  errorMessage = "";
  username:string;

  constructor(private router: Router, private ouvrageService: OuvrageService, private active:ActivatedRoute,private serv:OauthService) {}


  ngOnInit(): void {

    this.serv.getUserDetails().subscribe(reponse=>this.username=reponse["login"],error=>{console.log(error)});
    this.ouvrageService.getOuvrages().subscribe(
      ouvrages => {
        this.ouvrages = ouvrages;
      },
      error => {
        alert("Erreur");
        console.log(error);
      }
    );
  }


logout()
{
  this.serv.logout().subscribe(reponse=>this.router.navigate(["login"]),error=>{console.log( error)});
}

  detailOuvrage(id): void {
    this.router.navigate(["detail", id]);
  }

  editOuvrage(id): void {
    this.router.navigate(["edit", id]);
  }

  deleteOuvrage(id): void {
    console.log("Delete ", id);
    this.ouvrageService.deleteOuvrage(id).subscribe(
      reponse => {
        const link = ["list"];
        this.router.navigate(link);
      },
      error => {
        this.errorMessage = `Probléme de connexion au serveur`;
        alert(`Probléme de connexion au serveur`);
        console.log("Message d erreur", error);
      }
    );
  }
}
