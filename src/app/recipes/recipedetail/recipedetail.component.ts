import { Component, Input, OnInit } from '@angular/core';
import { Receipe } from '../recipe.model';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {
  @Input() receipeOnDisplay : Receipe;
  constructor() { }

  ngOnInit(): void {
  }

}
