import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingrident } from 'src/app/common/ingredients.model';

@Component({
  selector: 'app-shoppingedit',
  templateUrl: './shoppingedit.component.html',
  styleUrls: ['./shoppingedit.component.css']
})
export class ShoppingeditComponent implements OnInit {
 @ViewChild('nameRef') nameRef : ElementRef;
 @ViewChild('qtyRef') qtyRef : ElementRef;
 @Output() newIngridient = new EventEmitter<Ingrident>();
  constructor() { }

  ngOnInit(): void {
  }

  AddNewIngridient(){
    console.log(this.nameRef.nativeElement.value);
    const ingrident = new Ingrident(this.nameRef.nativeElement.value,this.qtyRef.nativeElement.value);
    this.newIngridient.emit(ingrident);
  }
}
