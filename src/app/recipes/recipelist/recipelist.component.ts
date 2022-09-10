import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Receipe } from '../recipe.model';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {

  @Output() selectedReceipe = new EventEmitter<Receipe>();

  receipes:Receipe[] = [
    new Receipe('A Test Recipe','We are testing it','https://cdn.pixabay.com/photo/2020/06/03/08/53/mozzarella-5254110__340.jpg'),
    new Receipe('A Test Recipe 2','We are testing it again','https://cdn.pixabay.com/photo/2020/06/03/08/53/mozzarella-5254110__340.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onReceipeSelect(receipe:Receipe){
    this.selectedReceipe.emit(receipe);
  }
}
