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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { dropdownDirective } from './shared/dropdown.directive';
import { shoppingList } from './shopping-list/shoppingList.service';
import { AppRoutingModule } from './app-routing.module';
import { SelectRecepiesComponent } from './recepies/select-recepies/select-recepies.component';
import { RecepiEditComponent } from './recepies/recepi-edit/recepi-edit.component';
import { recepieService } from './recepies/recepieService.service';


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
    dropdownDirective,
    SelectRecepiesComponent,
    RecepiEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [shoppingList,recepieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
