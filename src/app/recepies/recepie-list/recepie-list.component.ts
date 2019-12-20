import { Component, OnInit, EventEmitter,Output, AfterViewInit } from '@angular/core';
import {Recepie} from '../recepie.model';
import { recepieService } from '../recepieService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css'],
})
export class RecepieListComponent  {
  constructor(private recepieService:recepieService) {
   }
    deleteRecepie(id:number){
      this.recepieService.deleteRecepie(id);
    }
    
}
