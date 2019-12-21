import { Recepie } from './recepie.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/Ingredients.model';
import { Router } from '@angular/router';

@Injectable()
export class recepieService{
    recepieEmitter= new EventEmitter<Recepie>();
   private recepieList:Recepie[]=[new Recepie("pasta","Its a Italian Dish","https://www.dinneratthezoo.com/wp-content/uploads/2018/07/penne-alla-vodka-5.jpg",[new Ingredients("garlic",2),new Ingredients("onion",3)]),
    new Recepie("roeche","Its a Italian Dish made up of choclate and bread","https://www.dinneratthezoo.com/wp-content/uploads/2018/07/penne-alla-vodka-5.jpg",[new Ingredients("toamto",5),new Ingredients("salt",7)]),
    new Recepie("Salsa","Its a Italian Dish","https://www.dinneratthezoo.com/wp-content/uploads/2018/07/penne-alla-vodka-5.jpg",[new Ingredients("choclate",5),new Ingredients("parle",7)])];
    
    constructor(private router:Router){

    }
     currentRecepieSelected:Recepie;

     getRecepies(){
    return this.recepieList;
    }

    deleteRecepie(id:number){
        this.recepieList.splice(id,1);
    }

    recepieSelected(id:number):Recepie{
        if(this.recepieList.length-1>=id){
        this.currentRecepieSelected=this.recepieList[id];
        return this.currentRecepieSelected;
        }
        else{
        this.router.navigate(['/recepies']);
        }
    }

    getCurrentRecepie(id:number){
        return this.recepieList[id];
    }
    getCurrentIngredients(id:number){
        return this.recepieList[id].ingredients;
    }

    addRecepie(recepie:Recepie){
        this.recepieList.push(recepie);
    }

    editRecepie(id:number,recepie:Recepie){
    this.recepieList[id]=recepie;
    }
}