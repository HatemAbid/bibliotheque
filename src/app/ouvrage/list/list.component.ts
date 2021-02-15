import { Component, OnInit } from '@angular/core';
import { Ouvrage } from 'src/app/model/Ouvrage';
import { OuvrageService } from 'src/app/ouvrage.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private ouvrages: Ouvrage[];
  constructor(
    private ouvrageService: OuvrageService
  ) { }

  ngOnInit(): void {

    this.ouvrageService.getOuvrages().subscribe(
      (ouvrages) => {
        this.ouvrages = ouvrages;
      },
      (error) => {
        alert('Erreur');
        console.log(error);
      }
    );
  }

}
