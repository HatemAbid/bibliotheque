import { Component, OnInit } from "@angular/core";
import { Ouvrage } from "src/app/model/Ouvrage";
import { OuvrageService } from "../../ouvrage.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  private ouvrages: Ouvrage[];
  ouvrage: Ouvrage;
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
}
