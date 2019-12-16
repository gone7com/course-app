import { Component, OnInit, Input } from '@angular/core';
import { Recepie } from '../recepie.model';
import { recepieService } from '../recepieService.service';
import { Ingredients } from 'src/app/shared/Ingredients.model';
import { shoppingList } from 'src/app/shopping-list/shoppingList.service';

@Component({
  selector: 'recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css'],
})

export class RecepieDetailComponent implements OnInit {
   recepie:Recepie;
   ingredients:Ingredients[];

  constructor(private recepieService:recepieService,private shoppingList:shoppingList) {
    this.recepie=this.recepieService.currentRecepieSelected;
    this.ingredients=this.recepieService.currentRecepieSelected.ingredients;
    
   }


  ngOnInit() {

    this.recepieService.recepieEmitter.subscribe(
      (newRecepie:Recepie)=>{
      this.recepie=newRecepie;
      this.ingredients=newRecepie.ingredients;
      }
    );
  }

  sendToShoppingList(){
    this.shoppingList.addRecepieIngtoShoppingList(this.ingredients);
  }


}
