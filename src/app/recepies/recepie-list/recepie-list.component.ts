import { Component, OnInit, EventEmitter,Output, AfterViewInit } from '@angular/core';
import {Recepie} from '../recepie.model';

@Component({
  selector: 'recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit,AfterViewInit {
  ngAfterViewInit(): void {
    this.sendRecepie.emit({
      recepieN:this.recepieList[0].name,
      recepieD:this.recepieList[0].description,
      recepieI:this.recepieList[0].imgPath
      });
    
  }

  recepieName:string;
  recepieDesc:string;
  recepieImg:string;
  recepie:Recepie;
  @Output() sendRecepie= new EventEmitter<{recepieN:string,recepieD:string,recepieI:string}>();
  recepieList:Recepie[]=[new Recepie("pasta","Its a Italian Dish","https://www.dinneratthezoo.com/wp-content/uploads/2018/07/penne-alla-vodka-5.jpg"),new Recepie("roeche","Its a Italian Dish made up of choclate and bread","https://www.dinneratthezoo.com/wp-content/uploads/2018/07/penne-alla-vodka-5.jpg"),new Recepie("Salsa","Its a Italian Dish","https://www.dinneratthezoo.com/wp-content/uploads/2018/07/penne-alla-vodka-5.jpg")];
  constructor() {
    
   }
   
  ngOnInit() {
    
  }

  


  recepieDetail(recepieDetail:{recepieName:string,recepieDescription:string,recepieImg:string}){
      this.recepieName=recepieDetail.recepieName;
      this.recepieDesc=recepieDetail.recepieDescription;
      this.recepieImg=recepieDetail.recepieImg
      this.recepie=new Recepie(this.recepieName,this.recepieDesc,this.recepieImg);
      this.sendRecepieDetail(); 
      }
 
sendRecepieDetail(){
    this.sendRecepie.emit({
        recepieN:this.recepie.name,
        recepieD:this.recepie.description,
        recepieI:this.recepie.imgPath
        });
    }
}
