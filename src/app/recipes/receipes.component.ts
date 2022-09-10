import { Component, OnInit } from '@angular/core';
import { Receipe } from './recipe.model';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.css']
})
export class ReceipesComponent implements OnInit {
  receipeToShow : Receipe;
  constructor() { }

  ngOnInit(): void {
  }

  showReceipe(receipe : Receipe){
    this.receipeToShow = receipe;
  }
}
