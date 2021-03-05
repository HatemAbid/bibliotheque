import { Component, OnInit } from "@angular/core";
import { Ouvrage } from "../../model/Ouvrage";
import { OuvrageService } from "../../ouvrage.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  ouvrages: Ouvrage[];
  ouvrage: Ouvrage;
  errorMessage = "";
  constructor(private router: Router, private ouvrageService: OuvrageService) {}

  ngOnInit(): void {
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
