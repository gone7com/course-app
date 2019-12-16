import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recepie } from '../../recepie.model';
import { recepieService } from '../../recepieService.service';

@Component({
  selector: 'recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css'],
})
export class RecepieItemComponent implements OnInit {

  @Input() recepieList:Recepie; 
  
  constructor(private recepieService:recepieService) { }

  ngOnInit() {
  }

  recepieEmit(){
    this.recepieService.recepieEmitter.emit(this.recepieList);
   
  }
 
}
