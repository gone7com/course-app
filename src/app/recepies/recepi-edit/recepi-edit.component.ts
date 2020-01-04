import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { recepieService } from '../recepieService.service';
import { Recepie } from '../recepie.model';
import { Ingredients } from 'src/app/shared/Ingredients.model';
import { Route } from '@angular/compiler/src/core';
import { FormGroup, FormControl } from '@angular/forms';

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
  ingredientMake:String;
  ingredientsName:string;
  ingredientQunatity:number;
  ingredient:Ingredients;
  ingredientArray:Ingredients[]=[];
  recepieEditForm:FormGroup;

  constructor(private route:ActivatedRoute,private recepieService:recepieService,private router:Router) { 
    this.recepieEditForm = new FormGroup({
      'name':new FormControl(null),
      'detail': new FormControl(null),
      'image':new FormControl(null),
      'ingredient':new FormControl(null)
    });
    if(route.snapshot.params.id){
      this.id=route.snapshot.params.id;
      this.recepie=this.recepieService.getCurrentRecepie(this.id);
     
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
        'ingredient': this.ingredients
      })
      }
  }

  ngOnInit() {
   
     
  }

  addRecepie(){
      if(this.route.snapshot.params.id){
      this.ingredientsRaw=this.recepieEditForm.value.ingredient.split(",");
      for(this.ingredientMake of this.ingredientsRaw){
        var ingredientsArray=this.ingredientMake.split(":");
        this.ingredientsName=ingredientsArray[0];
        this.ingredientQunatity = +ingredientsArray[1];
        this.ingredientArray.push(new Ingredients(this.ingredientsName,this.ingredientQunatity))
    }
    console.log(new Recepie(this.recepieEditForm.value.name,this.recepieEditForm.value.detail,this.recepieEditForm.value.image,this.ingredientArray));
    this.recepieService.editRecepie(this.route.snapshot.params.id,new Recepie(this.recepieEditForm.value.name,this.recepieEditForm.value.detail,this.recepieEditForm.value.image,this.ingredientArray));
  
  }
      else{
        this.ingredientsRaw=this.recepieEditForm.value.ingredient.split(",");
      for(this.ingredientMake of this.ingredientsRaw){
        var ingredientsArray=this.ingredientMake.split(":");
        this.ingredientsName=ingredientsArray[0];
        this.ingredientQunatity = +ingredientsArray[1];
        this.ingredientArray.push(new Ingredients(this.ingredientsName,this.ingredientQunatity))
      }
      this.recepieService.addRecepie(new Recepie(this.recepieEditForm.value.name,this.recepieEditForm.value.detail,this.recepieEditForm.value.image,this.ingredientArray));
    }
    this.router.navigate(["/recepies/"+this.route.snapshot.params.id]);
  }

}
