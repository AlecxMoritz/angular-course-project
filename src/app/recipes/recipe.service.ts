import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe("Spaghetti",
            "Noodly Goodness", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homemade-spaghetti-sauce-horizontal-1530890913.jpg?crop=1xw:1xh;center,top&resize=480:*",
            [
                new Ingredient('Meat', 1),
                new Ingredient('Noodles', 3),
            ]),
        new Recipe("Chicken Cordon Bleu",
        "Chickeny Goodness", "https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/chicken-cordon-bleu.jpg?itok=wzSI26Rq", [
                new Ingredient('Chicken', 1),
                new Ingredient('Breadcrumbs', 1)
            ])
        ]

    constructor(private shoppingListService: ShoppingListService) { }
        
    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]): void {
        this.shoppingListService.addIngredients(ingredients);
    }
}