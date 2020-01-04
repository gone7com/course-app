import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { recepieService } from '../recepieService.service';
import { Recepie } from '../recepie.model';
import { Ingredients } from 'src/app/shared/Ingredients.model';
import { Route } from '@angular/compiler/src/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-recepi-edit',
  templateUrl: './recepi-edit.component.html',
  styleUrls: ['./recepi-edit.component.css']
})
export class RecepiEditComponent implements OnInit {
  name:string;
  description:string;
  img:string;
  id:number;
  recepie:Recepie;
  ingredients:string="";
  ingredientsRaw:string[];
  ingredientMake:any;
  ingredientsName:string;
  ingredientQunatity:number;
  ingredient:Ingredients;
  ingredientArray:Ingredients[]=[];
  recepieEditForm:FormGroup;
  ingredientArrayForm = new FormArray([]);
  constructor(private route:ActivatedRoute,private recepieService:recepieService,private router:Router) { 
    this.recepieEditForm = new FormGroup({
      'name':new FormControl(null),
      'detail': new FormControl(null),
      'image':new FormControl(null),
      'ingredient':new FormControl(null),
      'ingredientArray': this.ingredientArrayForm
    });
    console.log(this.ingredientArrayForm);
    if(route.snapshot.params.id){
      this.id=route.snapshot.params.id;
      this.recepie=this.recepieService.getCurrentRecepie(this.id);
      for(let ing of this.recepie.ingredients){
        this.ingredientArrayForm.push(new FormGroup({
          'name' : new FormControl(ing.ingName),
          'amount': new FormControl(ing.quantity)
        }))
      }
      
        var index:number=0;
      for(this.ingredient of this.recepieService.getCurrentRecepie(route.snapshot.params.id).ingredients){
        this.ingredients+=this.ingredient.ingName+":";
        if(this.recepieService.getCurrentRecepie(route.snapshot.params.id).ingredients.length-1>index)
        this.ingredients+=this.ingredient.quantity+",";
        else
        this.ingredients+=this.ingredient.quantity;
        index++;
      }
      this.recepieEditForm.setValue({
        'name': this.recepie.name,
        'detail': this.recepie.description,
        'image': this.recepie.imgPath,
        'ingredient': this.ingredients,
        'ingredientArray':this.ingredientArrayForm.value

      })
      }
    
   
    
  }

  ngOnInit() {
   
     
  }

  addRecepie(){
      if(this.route.snapshot.params.id){
      for(this.ingredientMake of this.recepieEditForm.value.ingredientArray){
        this.ingredientArray.push(new Ingredients(this.ingredientMake.name,this.ingredientMake.amount))
    }
    console.log(new Recepie(this.recepieEditForm.value.name,this.recepieEditForm.value.detail,this.recepieEditForm.value.image,this.ingredientArray));
    this.recepieService.editRecepie(this.route.snapshot.params.id,new Recepie(this.recepieEditForm.value.name,this.recepieEditForm.value.detail,this.recepieEditForm.value.image,this.ingredientArray));
  
  }
      else{
        for(this.ingredientMake of this.recepieEditForm.value.ingredientArray){
          this.ingredientArray.push(new Ingredients(this.ingredientMake.name,this.ingredientMake.amount))
      }
      this.recepieService.addRecepie(new Recepie(this.recepieEditForm.value.name,this.recepieEditForm.value.detail,this.recepieEditForm.value.image,this.ingredientArray));
    }
    this.router.navigate(["/recepies/"+this.route.snapshot.params.id]);
  }
addIngredientRow(){
 var formControl =  new FormGroup({
  'name' : new FormControl(null),
  'amount': new FormControl(null)
});
this.ingredientArrayForm.push(formControl);
}
}
