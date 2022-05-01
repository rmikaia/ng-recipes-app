import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Burger',
      'This is a test',
      'https://images.rtl.fr/~c/770v513/rtl/www/1460953-un-hamburger-image-d-illustration.jpg',
      [new Ingredient('Meat', 4), new Ingredient('Salad', 1)]
    ),
    new Recipe(
      2,
      'Kebab',
      'Another test',
      'https://assets.afcdn.com/recipe/20210304/118354_w1024h576c1cx1060cy707.webp',
      [new Ingredient('Meat', 2), new Ingredient('Fries', 2)]
    ),
  ];

  constructor(private shoppingService: ShoppingListService) {}

  getRecipe(id: number) {
    return this.recipes.find((recipe) => recipe.id === id);
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }
}
