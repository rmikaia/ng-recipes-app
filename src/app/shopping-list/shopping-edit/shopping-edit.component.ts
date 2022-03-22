import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() ingrediendAdded = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit(): void {}

  onAddIngredient() {
    const nameEl = <HTMLInputElement>this.nameInput.nativeElement;
    const amountEl = <HTMLInputElement>this.amountInput.nativeElement;
    this.ingrediendAdded.emit(new Ingredient(nameEl.value, +amountEl.value));
  }

  onClear() {
    const nameEl = <HTMLInputElement>this.nameInput.nativeElement;
    const amountEl = <HTMLInputElement>this.amountInput.nativeElement;
    nameEl.value = '';
    amountEl.value = '';
  }
}
