import { Recepie } from './recepie.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/Ingredients.model';
import { Router } from '@angular/router';

@Injectable()
export class recepieService{
    recepieEmitter= new EventEmitter<Recepie>();
    recepieList:Recepie[];
    recepieId:number;
    
    constructor(private router:Router){
        
    }
     currentRecepieSelected:Recepie;

     getRecepies(){
         console.log(this.recepieList[1].ingredients)
        //  console.log("-------------------------"+this.recepieList);
    return this.recepieList;
    }

    deleteRecepie(id:number){
        this.recepieList.splice(id,1);
    }

    recepieSelected(id:number):Recepie{
        if(this.recepieList.length-1>=id){
        this.currentRecepieSelected=this.recepieList[id];
       // console.log(this.currentRecepieSelected)
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