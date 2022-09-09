import { Component, OnInit } from '@angular/core';
import { Receipe } from '../recipe.model';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  receipes:Receipe[] = [
    new Receipe('A Test Recipe','We are testing it','https://cdn.pixabay.com/photo/2020/06/03/08/53/mozzarella-5254110__340.jpg'),
    new Receipe('A Test Recipe 2','We are testing it again','https://cdn.pixabay.com/photo/2020/06/03/08/53/mozzarella-5254110__340.jpg')

  ];
  constructor() { }
  ngOnInit(): void {
  }

}
