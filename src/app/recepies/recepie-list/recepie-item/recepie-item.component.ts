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
  constructor(private recepieService:recepieService,private router:Router) { }
  ngOnInit() {
  }
  recepieEmit(){
    // this.recepieService.recepieEmitter.emit(this.recepieList);
  }
  showRecepieDetail(){
    this.recepieService.recepieSelected(this.id);
    this.router.navigate(['recepies/'+this.id]);
    console.log("working"+this.id);
  }
}
