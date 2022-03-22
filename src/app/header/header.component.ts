import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() menuSelected = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onSelectMenu(item: string) {
    this.menuSelected.emit(item);
  }
}
