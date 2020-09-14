import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { FilmItemComponent } from '../film-item/film-item.component';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  description: string = 'Middle card description';
  films: object[];

  constructor(private filmsService: FilmService) {

  }

  ngOnInit() {
    this.films = this.filmsService.getFilms();
  }
  onEvent(event) {
    console.log(event)
  }
}
