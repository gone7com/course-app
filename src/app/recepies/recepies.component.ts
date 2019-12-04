import { Component, OnInit } from '@angular/core';
import { Recepie } from './recepie.model';

@Component({
  selector: 'recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent implements OnInit {
  recepie:Recepie=new Recepie("","","");
  constructor() { }
  
  ngOnInit() {
  }

  recepieDetail(recepie:{recepieN:string,recepieD:string,recepieI:string}){
        this.recepie.name=recepie.recepieN;
        this.recepie.description=recepie.recepieD;
        this.recepie.imgPath=recepie.recepieI;
        console.log(this.recepie);
        }

}
