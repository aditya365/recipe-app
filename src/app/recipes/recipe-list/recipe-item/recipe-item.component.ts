import { Component, OnInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeClicked = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeClick() {
    this.recipeClicked.emit(this.recipe);
  }
}
