import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/Ingredients.model';
import { shoppingList } from './shoppingList.service';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  
})
export class ShoppingListComponent implements OnInit {

  shoppingListShow:Ingredients[];

  constructor(private shoppingList:shoppingList){
   
  }


  ngOnInit() {
    
  }



  

}
