import { Component, OnInit } from '@angular/core';
import {Recepie} from '../recepie.model';

@Component({
  selector: 'recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  recepieList:Recepie[]=[new Recepie("pasta","Its a Italian Dish","https://www.dinneratthezoo.com/wp-content/uploads/2018/07/penne-alla-vodka-5.jpg"),new Recepie("pasta","Its a Italian Dish","https://www.dinneratthezoo.com/wp-content/uploads/2018/07/penne-alla-vodka-5.jpg")];


}
