import { Ingredient } from '../shared/ingredients.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Crackers', 1)
    ];

    addIngredient(newIngredient: Ingredient) : void {
        this.ingredients.push(newIngredient)
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    getIngredients() : Ingredient[] {
        return this.ingredients.slice();
    }   

    addIngredients(ingredients: Ingredient[]) {
            this.ingredients.push(...ingredients);
            this.ingredientsChanged.emit(this.ingredients.slice());
    }
 }