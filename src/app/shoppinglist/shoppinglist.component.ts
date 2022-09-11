import { Component, OnInit } from '@angular/core';
import { Ingrident } from '../common/ingredients.model';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {

  ingredients = [
    new Ingrident("Potato",20),
    new Ingrident("Tomato",40)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addIngridient(ingrident : Ingrident){
    this.ingredients.push(ingrident);
  }

}
