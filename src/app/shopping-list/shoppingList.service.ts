import { Ingredients } from '../shared/Ingredients.model';
import { EventEmitter } from '@angular/core';

export class shoppingList{
  
 //clearshopping= new EventEmitter<>();

    shoppingList:Ingredients[]=[new Ingredients("bread",7),new Ingredients("onion",17)];


    addToShoppingList(ingredient:Ingredients){
        this.shoppingList.push(ingredient);
    }

    
    
    getShoppingList(): Ingredients[] {
       return this.shoppingList;
      }  

      addRecepieIngtoShoppingList(ingredients:Ingredients[]){
          for(var ingredient of ingredients){
            this.shoppingList.push(ingredient);
          }
      }


}