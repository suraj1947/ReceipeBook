import { Component, Input, OnInit } from '@angular/core';
import { Receipe } from '../../recipe.model';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {
  @Input() currentReceipe : Receipe;

  constructor() {}

  ngOnInit(): void {

  }

}
