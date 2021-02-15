import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OuvrageService } from "../../ouvrage.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  errorMessage = '';
  constructor(private ouvrageService: OuvrageService,
  private router: Router) { }

  ngOnInit(): void {
  }

  addOuvrage(formulaire){
    console.log(formulaire);
    this.ouvrageService.addOuvrage(formulaire).subscribe(
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
