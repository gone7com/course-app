import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredients } from 'src/app/shared/Ingredients.model';
import { shoppingList } from '../shoppingList.service';


@Component({
  selector: 'shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
  
})
export class ShoppingEditComponent implements OnInit {

  name:string='';
  amount:number;


  constructor(private shoppingListservice:shoppingList) { }

  ngOnInit() {
  }

  addNewIngredient(formValue:any){
    this.shoppingListservice.addToShoppingList(new Ingredients(formValue.name,formValue.amount));
    console.log(this.shoppingListservice.getShoppingList());
    this.name='';
    this.amount=0;
    console.log(formValue);
  }

  clearShoppingList(){
    this.shoppingListservice.shoppingList=[]
   this.name='';
   this.amount=0;
  }

}






