import { Component, OnInit, Input } from '@angular/core';
import { Recepie } from '../recepie.model';
import { recepieService } from '../recepieService.service';
import { Ingredients } from 'src/app/shared/Ingredients.model';
import { shoppingList } from 'src/app/shopping-list/shoppingList.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css'],
})

export class RecepieDetailComponent implements OnInit {
   recepie:Recepie;
   ingredients:Ingredients[];

  constructor(private recepieService:recepieService,private shoppingList:shoppingList,private routes:ActivatedRoute,private route:Router) {
    this.recepie=this.recepieService.recepieSelected(this.routes.snapshot.params.id);
    this.ingredients=this.recepieService.currentRecepieSelected.ingredients;
    
   }
  ngOnInit() {
    this.routes.params.subscribe((params: Params) => {
      const id = params['id'];
      this.recepie=this.recepieService.currentRecepieSelected;
      this.ingredients=this.recepieService.currentRecepieSelected.ingredients;
    });
  }
  sendToShoppingList(){
    this.shoppingList.addRecepieIngtoShoppingList(this.ingredients);
  }


}
