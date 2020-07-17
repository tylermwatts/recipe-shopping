import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Spanish Chicken',
      'A savory dish that stays mainly on the plan in Spain.',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    ),
    new Recipe(
      'Sloppy Joes',
      'An American classic that sticks to the ribs.',
      'https://live.staticflickr.com/65535/48128926506_87a54512fb_b.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
