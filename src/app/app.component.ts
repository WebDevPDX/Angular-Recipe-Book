import { Component } from '@angular/core';
import { RecipeService } from "./recipes/recipe.service";

@Component({
  moduleId: module.id,
  selector: 'rb-root',
  templateUrl: './app.component.html',
  providers: [RecipeService]
})
export class AppComponent {

}
