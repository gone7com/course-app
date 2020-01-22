import { Component, OnInit, Input } from '@angular/core';
import { Recepie } from '../recepie.model';
import { recepieService } from '../recepieService.service';
import { Ingredients } from 'src/app/shared/Ingredients.model';
import { shoppingList } from 'src/app/shopping-list/shoppingList.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { recepieAddService } from '../recepieAddService.service';

@Component({
  selector: 'recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css'],
})

export class RecepieDetailComponent implements OnInit {
   recepie:Recepie;
   ingredients:Ingredients[];
    id:number;
  constructor(private recepieService:recepieService,private shoppingList:shoppingList,private routes:ActivatedRoute,private route:Router,private recepieAddService:recepieAddService) {
  //   this.routes.params.subscribe((params: Params) => {
  //     this.id = params['id'];
  //     console.log("kkkkkkkkkkkkkkkkkooooooo"+this.id)
  //    this.recepie=this.recepieService.currentRecepieSelected;
  //    this.ingredients=this.recepieService.currentRecepieSelected.ingredients;
  //  });
    // this.recepieAddService.getAllRecepie().subscribe(
    //   (recepies)=>{
    //     this.recepieService.recepieList=recepies;
    //     this.recepie=this.recepieService.currentRecepieSelected;
    //     console.log("ccccccccccccuuuuuuuuuuuuuuu"+this.recepie);
    //     this.ingredients=this.recepieService.currentRecepieSelected.ingredients;
    //   }     
    // )
   
    // this.recepie=this.recepieService.currentRecepieSelected;
    //    // console.log("ccccccccccccuuuuuuuuuuuuuuu"+this.recepie);
        // this.ingredients=this.recepieService.currentRecepieSelected.ingredients; 
   }
  ngOnInit() {
    this.routes.params.subscribe((params: Params) => {
      console.log("rrrrrrrrooooooo"+ params['id']) 
      this.id = params['id'];
      this.recepieAddService.getAllRecepie().subscribe(
          (recepies)=>{
            this.recepieService.recepieList=recepies;
            this.recepie=this.recepieService.recepieSelected(this.id);
            console.log("ccccccccccccuuuuuuuuuuuuuuu"+this.recepie);
            this.ingredients=this.recepieService.currentRecepieSelected.ingredients;
          }     
        )
       
   
    });
  }
  sendToShoppingList(){
    this.shoppingList.addRecepieIngtoShoppingList(this.ingredients);
  }

  deleteRecepie(id:number){
    this.recepieAddService.deleteRecepie(this.recepie).subscribe(
      (data)=>console.log("Recepie deleted")
    );
    this.route.navigate(["/recepies"]);
  }

}
