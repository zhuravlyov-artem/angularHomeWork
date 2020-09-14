import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmItemComponent } from './film-item/film-item.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatTabsModule

  ],
  declarations: [
    MainComponent,
    FilmListComponent,
    FilmItemComponent,
    DetailsComponent
  ]
})
export class FilmCatalogModule { }
