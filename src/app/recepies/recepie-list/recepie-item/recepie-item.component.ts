import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recepie } from '../../recepie.model';
import { recepieService } from '../../recepieService.service';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css'],
})
export class RecepieItemComponent implements OnInit {
  @Input() recepieList:Recepie; 
  @Input() id:number;
  
  constructor(private recepieService:recepieService,private router:Router) {}
  ngOnInit() {
  }
  recepieEmit(){
   
  }
  showRecepieDetail(){
    // console.log("0000000000000000000000"+this.id)
    this.recepieService.recepieSelected(this.id);
    
  }
}
