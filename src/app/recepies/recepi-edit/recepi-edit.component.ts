import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { recepieService } from '../recepieService.service';
import { Recepie } from '../recepie.model';
import { Ingredients } from 'src/app/shared/Ingredients.model';
import { Route } from '@angular/compiler/src/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { recepieAddService } from '../recepieAddService.service';

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
  constructor(private route:ActivatedRoute,private recepieService:recepieService,private router:Router,private recepieAddService:recepieAddService) { 
    this.recepieEditForm = new FormGroup({
      'recepieName':new FormControl(null),
      'recepieDescription': new FormControl(null),
      'imageUrl':new FormControl(null),
      'ingredient':new FormControl(null),
      'ingredientArray': this.ingredientArrayForm
    });
    //console.log(this.ingredientArrayForm);
     
   
    
  }

  ngOnInit() {
    if(this.route.snapshot.params.id){
      this.id=this.route.snapshot.params.id;
     


      this.recepieAddService.getAllRecepie().subscribe(
        (recepies)=>{
          this.recepieService.recepieList=recepies;
          this.recepie=this.recepieService.recepieList[this.id];
          console.log("zzzzzzzzzzzzzzzzzzzzzzzz");
          console.log(this.recepieService.recepieList[this.id]);
          for(let ing of this.recepie.ingredients){
            this.ingredientArrayForm.push(new FormGroup({
              'ingredientName' : new FormControl(ing.ingredientName),
              'ingredientAmount': new FormControl(ing.ingredientAmount)
            }))
          }
          
            var index:number=0;
          for(this.ingredient of this.recepieService.getCurrentRecepie(this.route.snapshot.params.id).ingredients){
            this.ingredients+=this.ingredient.ingredientName+":";
            if(this.recepieService.getCurrentRecepie(this.route.snapshot.params.id).ingredients.length-1>index)
            this.ingredients+=this.ingredient.ingredientAmount+",";
            else
            this.ingredients+=this.ingredient.ingredientAmount;
            index++;
          }
          this.recepieEditForm.setValue({
            'recepieName': this.recepie.recepieName,
            'recepieDescription': this.recepie.recepieDescription,
            'imageUrl': this.recepie.imageUrl,
            'ingredient': this.ingredients,
            'ingredientArray':this.ingredientArrayForm.value
    
          })
      
        }     
      )
      this.recepie=this.recepieService.currentRecepieSelected;
console.log("receeeeeeeeepieeeeeeeeee")
console.log(this.recepie)

      
      }
   
     
  }

  addRecepie(){

      if(this.route.snapshot.params.id){
      for(this.ingredientMake of this.recepieEditForm.value.ingredientArray){
        this.ingredientArray.push(new Ingredients(this.ingredientMake.ingredientName,this.ingredientMake.ingredientAmount))
    }
    //console.log(new Recepie(this.recepieEditForm.value.name,this.recepieEditForm.value.detail,this.recepieEditForm.value.image,this.ingredientArray));
    this.recepieService.editRecepie(this.route.snapshot.params.id,new Recepie(this.recepieEditForm.value.name,this.recepieEditForm.value.detail,this.recepieEditForm.value.image,this.recepieEditForm.value.ingredientArray));
    
  }
      else{
        for(this.ingredientMake of this.recepieEditForm.value.ingredientArray){
          this.ingredientArray.push(new Ingredients(this.ingredientMake.ingredientName,this.ingredientMake.ingredientAmount))
      }
      this.recepieService.addRecepie(new Recepie(this.recepieEditForm.value.recepieName,this.recepieEditForm.value.recepieDescription,this.recepieEditForm.value.imageUrl,this.ingredientArray));
     console.log("AAAAAAAADDDDDDDDDDDDD");
      console.log(this.recepieService.recepieList);
      console.log(JSON.stringify(new Recepie(this.recepieEditForm.value.recepieName,this.recepieEditForm.value.recepieDescription,this.recepieEditForm.value.imageUrl,this.ingredientArray)));
      this.recepieAddService.storeRecepie(new Recepie(this.recepieEditForm.value.recepieName,this.recepieEditForm.value.recepieDescription,this.recepieEditForm.value.imageUrl,this.ingredientArray))
      .subscribe(
        (response)=>{console.log(response)
         
        },
        (error)=>console.log(error)
      );
      this.router.navigate(["/recepies/"+this.route.snapshot.params.id]);  
    }
    this.router.navigate(["/recepies/"+this.route.snapshot.params.id]);
  }
addIngredientRow(){
 var formControl =  new FormGroup({
  'ingredientName' : new FormControl(null),
  'ingredientAmount': new FormControl(null)
});
this.ingredientArrayForm.push(formControl);
}
}
