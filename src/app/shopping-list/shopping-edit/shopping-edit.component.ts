import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredients } from 'src/app/shared/Ingredients.model';


@Component({
  selector: 'shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@Output() addIngredient= new EventEmitter<{name:string,amount:number}>();
  name:string='';
  amount:number;


  constructor() { }

  ngOnInit() {
  }

  addNewIngredient(){
this.addIngredient.emit({
  name:this.name,
  amount:this.amount
});
  }





}
