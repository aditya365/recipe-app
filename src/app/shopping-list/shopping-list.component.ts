import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('potatos', 10),
    new Ingredient('oil', 1),
  ];
  constructor() { }

  ngOnInit() {
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
