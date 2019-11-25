import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/Ingredients.model';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  shoppingList:Ingredients[]=[new Ingredients("bread",7),new Ingredients("onion",17)];
  constructor() { }

  ngOnInit() {
  }


}
