import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {
  @Input() filmItem: any;
  @Output() message: EventEmitter<string> = new EventEmitter<string>();
  constructor() {
  }
  ngOnInit() {
  console.log(this.filmItem)
  }

  onClick() {
    this.message.emit('Hello');
  }
}
