import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-recipe-start',
  template: `
    <p>
      Plese select a Recipe!
    </p>
  `,
  styles: []
})
export class RecipeStartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
