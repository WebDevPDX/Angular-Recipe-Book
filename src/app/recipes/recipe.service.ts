import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";
import 'rxjs/Rx';

import { Recipe } from "./recipe";
import { Ingredient } from "../shared/ingredient";

@Injectable()
export class RecipeService {

  recipeUpdate = new EventEmitter<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Super Good', 'http://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/36/47/63/picxbpNOo.jpg', [
      new Ingredient('Pork Chop', 1),
      new Ingredient('Egg', 1),
      new Ingredient('Bread Crumbs', 1)
    ]),
    new Recipe('Salad', 'No Meat', 'http://assets.simplyrecipes.com/wp-content/uploads/2016/07/2016-08-12-BLT-Salad-3-600x400.jpg', [])
  ];

  constructor(private http: Http) { }

  getRecipes() {
    return this.recipes
  }
  getRecipe(id: number) {
    return this.recipes[id]
  }
  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1)
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe)
  }
  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe
  }
  //db interactions
  storeData() {
    const body = JSON.stringify(this.recipes)
    const headers = new Headers({
      'Content-Type': 'application/json'
    })
    return this.http.put('https://recipebook-cd00d.firebaseio.com/recipes.json', body, {headers: headers})
  }
  fetchData() {
    return this.http.get('https://recipebook-cd00d.firebaseio.com/recipes.json')
      .map((response: Response) => response.json())
      .subscribe((data: Recipe[]) => {
          this.recipes = data;
          this.recipeUpdate.emit();
        }
      );
  }

}
