import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recepie } from '../../recepie.model';

@Component({
  selector: 'recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {

  @Input('recepieList') recepieList:Recepie; 
  @Output() recepieDetail= new EventEmitter<{recepieName:string, recepieDescription:string, recepieImg:string}>();
  constructor() { }

  ngOnInit() {
  }

  sendRecepieDetail(){
    this.recepieDetail.emit({
      recepieName:this.recepieList.name,
      recepieDescription:this.recepieList.description,
      recepieImg:this.recepieList.imgPath
    });
 
  }

}
