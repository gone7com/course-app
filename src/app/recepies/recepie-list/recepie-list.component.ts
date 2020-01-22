import { Component, OnInit, EventEmitter,Output, AfterViewInit } from '@angular/core';
import {Recepie} from '../recepie.model';
import { recepieService } from '../recepieService.service';
import { Router } from '@angular/router';
import { recepieAddService } from '../recepieAddService.service';

@Component({
  selector: 'recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css'],
})
export class RecepieListComponent implements OnInit {
  ngOnInit(): void {
    this.recepieAddService.getAllRecepie().subscribe(
      (recepies)=>{
        this.recepieService.recepieList=recepies;
      }     
    );
  }
recepieArray:any;
  constructor(private recepieService:recepieService,private recepieAddService:recepieAddService) {
    
   }

    deleteRecepie(id:number){
      this.recepieService.deleteRecepie(id);
    }
    
}
