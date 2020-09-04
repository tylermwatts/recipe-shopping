import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Spanish Chicken',
      'A savory dish that stays mainly on the plan in Spain.',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [new Ingredient('Chicken breast', 1), new Ingredient('Spices', 3)]
    ),
    new Recipe(
      'Sloppy Joes',
      'An American classic that sticks to the ribs.',
      'https://live.staticflickr.com/65535/48128926506_87a54512fb_b.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Ground beef', 1),
        new Ingredient('Sloppy Joe mix', 1),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return [...this.recipes];
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.slService.addIngredients(ingredients);
  }
}
