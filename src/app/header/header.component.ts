import {Component, Output, EventEmitter} from "@angular/core";


@Component({
    selector:"app-header",
    templateUrl:"./header.component.html"
})
export class HeaderComponent{
   @Output() recepieEmitter= new EventEmitter<{recepieValue: boolean, shoppingListValue: boolean}>();
   @Output() shoppingListEmitter= new EventEmitter<{recepieValue: boolean, shoppingListValue: boolean}>(); 



    RecepieShow(){
    this.recepieEmitter.emit({
        recepieValue:true,
        shoppingListValue:false
    });
   }
   shoppingListShow(){
    this.shoppingListEmitter.emit({
        recepieValue:false,
        shoppingListValue:true
   });
}

}
