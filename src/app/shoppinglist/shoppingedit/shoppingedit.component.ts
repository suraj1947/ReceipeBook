import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingrident } from 'src/app/common/ingredients.model';

@Component({
  selector: 'app-shoppingedit',
  templateUrl: './shoppingedit.component.html',
  styleUrls: ['./shoppingedit.component.css']
})
export class ShoppingeditComponent implements OnInit {
  @ViewChild('nameRef',{static:false}) name : ElementRef;
  @ViewChild('qtyRef',{static : false}) qty : ElementRef;
  @Output() addIngridient = new EventEmitter<Ingrident>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewIngridient(){
   const newIngridient = new Ingrident(this.name.nativeElement.value,this.qty.nativeElement.value);
   this.addIngridient.emit(newIngridient);
  }
}
