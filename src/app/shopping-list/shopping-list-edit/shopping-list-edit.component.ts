import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  // @ViewChild('serverContentInput') serverContentInput: ElementRef;
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() itemAdded = new EventEmitter<Ingredient>()
  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const name = this.nameInputRef.nativeElement.value;
    const quantity = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(name, quantity);

    this.itemAdded.emit(newIngredient);
  }
}
