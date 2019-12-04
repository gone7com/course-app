import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-app';
  recepieComponent:boolean=true;
  shoppingListComponent:boolean=false;
  
  recepieShow(eventData:{recepieValue:boolean,shoppingListValue:boolean}){
    console.log(eventData.recepieValue);
    this.recepieComponent=eventData.recepieValue;
    this.shoppingListComponent=eventData.shoppingListValue;
  }

  shoppingListShow(eventData:{recepieValue:boolean,shoppingListValue:boolean}){
    this.recepieComponent=eventData.recepieValue;
    this.shoppingListComponent=eventData.shoppingListValue;
  }

}
