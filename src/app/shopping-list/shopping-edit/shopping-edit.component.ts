import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private shoppingService: ShoppingListService) {}

  ngOnInit(): void {}

  onAddIngredient() {
    const nameEl = <HTMLInputElement>this.nameInput.nativeElement;
    const amountEl = <HTMLInputElement>this.amountInput.nativeElement;
    this.shoppingService.addIngredient(
      new Ingredient(nameEl.value, +amountEl.value)
    );
  }

  onClear() {
    const nameEl = <HTMLInputElement>this.nameInput.nativeElement;
    const amountEl = <HTMLInputElement>this.amountInput.nativeElement;
    nameEl.value = '';
    amountEl.value = '';
  }
}
