import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { RecepieDetailComponent } from './recepies/recepie-detail/recepie-detail.component';
import { SelectRecepiesComponent } from './recepies/select-recepies/select-recepies.component';
import { RecepiEditComponent } from './recepies/recepi-edit/recepi-edit.component';

const appRoutes:Routes=[

    {path:'',redirectTo:'recepies',pathMatch:'full'},
    {path:'recepies',component:RecepiesComponent,
children:[{path:'edit',component:RecepiEditComponent},{path:':id',component:RecepieDetailComponent},{path:'',component:SelectRecepiesComponent},{path:':id/edit',component:RecepiEditComponent}]},
    {path:'shopping',component:ShoppingListComponent},
    {path:'**',redirectTo:'recepies'},    
  ];

@NgModule({
imports:[RouterModule.forRoot(appRoutes)],
exports:[RouterModule]
})
export class AppRoutingModule{

}