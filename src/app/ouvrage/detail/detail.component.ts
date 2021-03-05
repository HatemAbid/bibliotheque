import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OuvrageService } from "../../ouvrage.service";
import { Ouvrage } from "../../model/Ouvrage";


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  errorMessage = '';
  ouvrage: Ouvrage;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private ouvrageService: OuvrageService
  ) { }

  ngOnInit(): void {
  //   this.activatedRoute.params.subscribe(
  //     (params) => {
  //       console.log(params.id);
  //     }
  //   );
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

}
