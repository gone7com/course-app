import { Component, OnInit } from '@angular/core';
import { Recepie } from './recepie.model';
import {recepieService} from './recepieService.service';
@Component({
  selector: 'recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css'],
  providers: [recepieService]
})
export class RecepiesComponent implements OnInit {
  
  constructor(private recepieService:recepieService) { }
  
  ngOnInit() {
  
  }

  

}
