import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { recepieService } from '../recepieService.service';
import { Recepie } from '../recepie.model';
import { Ingredients } from 'src/app/shared/Ingredients.model';
import { Route } from '@angular/compiler/src/core';

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

  constructor(private route:ActivatedRoute,private recepieService:recepieService,private router:Router) { 
    if(route.snapshot.params.id){
    this.id=route.snapshot.params.id;
    this.recepie=this.recepieService.getCurrentRecepie(this.id);
    this.name=this.recepie.name;
    this.description=this.recepie.description;
    this.img=this.recepie.imgPath;
      var index:number=0;
    for(this.ingredient of this.recepieService.getCurrentRecepie(route.snapshot.params.id).ingredients){
      this.ingredients+=this.ingredient.ingName+":";
      if(this.recepieService.getCurrentRecepie(route.snapshot.params.id).ingredients.length-1>index)
      this.ingredients+=this.ingredient.quantity+",";
      else
      this.ingredients+=this.ingredient.quantity;
      index++;
    }

    }
  }

  ngOnInit() {
  }

  addRecepie(){
      if(this.route.snapshot.params.id){
      this.ingredientsRaw=this.ingredients.split(",");
      for(this.ingredientMake of this.ingredientsRaw){
        var ingredientsArray=this.ingredientMake.split(":");
        this.ingredientsName=ingredientsArray[0];
        this.ingredientQunatity = +ingredientsArray[1];
        this.ingredientArray.push(new Ingredients(this.ingredientsName,this.ingredientQunatity))
    }
    this.recepieService.editRecepie(this.route.snapshot.params.id,new Recepie(this.name,this.description,this.img,this.ingredientArray));
  
  }
      else{
        this.ingredientsRaw=this.ingredients.split(",");
      for(this.ingredientMake of this.ingredientsRaw){
        var ingredientsArray=this.ingredientMake.split(":");
        this.ingredientsName=ingredientsArray[0];
        this.ingredientQunatity = +ingredientsArray[1];
        this.ingredientArray.push(new Ingredients(this.ingredientsName,this.ingredientQunatity))
      }
      this.recepieService.addRecepie(new Recepie(this.name,this.description,this.img,this.ingredientArray));
    }
    this.router.navigate(["/recepies/"+this.route.snapshot.params.id]);
  }

}
