import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Receipe } from '../../recipe.model';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {
  @Input() currentReceipe : Receipe;
  @Output() selectedReceipe = new EventEmitter<void>();

  constructor() {}

  loadReceipe(){
    this.selectedReceipe.emit();
  }

  ngOnInit(): void {

  }

}
