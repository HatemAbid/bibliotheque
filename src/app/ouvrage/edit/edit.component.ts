import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OuvrageService } from "../../ouvrage.service";
import { Ouvrage } from "src/app/model/Ouvrage";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  errorMessage = '';
  ouvrage : Ouvrage;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private ouvrageService: OuvrageService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.ouvrageService.getOuvrageById(params.id).subscribe(
          (ouvrage) => {
            this.ouvrage = ouvrage;
          },
          (error) => {
            this.errorMessage = `Probléme de connexion au serveur`;
            // alert('Erreur');
            console.log(error);
          }
        );
      }
    );
  }

  editOuvrage(formulaire){
    console.log(formulaire);
    this.ouvrageService.editOuvrage(formulaire).subscribe(
      (reponse) => {
        const link = ['list'];
        this.router.navigate(link);
      },
      (error) => {
        this.errorMessage = `Probléme de connexion au serveur`;
        alert(`Probléme de connexion au serveur`);
        console.log('Message d erreur', error);
      }
    );
  }

}
