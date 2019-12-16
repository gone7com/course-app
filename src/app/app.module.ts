import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { RecepieDetailComponent } from './recepies/recepie-detail/recepie-detail.component';
import { RecepieListComponent } from './recepies/recepie-list/recepie-list.component';
import { RecepieItemComponent } from './recepies/recepie-list/recepie-item/recepie-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {FormsModule} from '@angular/forms';
import { dropdownDirective } from './shared/dropdown.directive';
import { shoppingList } from './shopping-list/shoppingList.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecepiesComponent,
    RecepieDetailComponent,
    RecepieListComponent,
    RecepieItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    dropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [shoppingList],
  bootstrap: [AppComponent]
})
export class AppModule { }
