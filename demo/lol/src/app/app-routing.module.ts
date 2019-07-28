import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './list/list.component';
import {BoxComponent} from './box/box.component';
import {DetailsComponent} from './details/details.component';
const routes: Routes = [
  {path:'',redirectTo:'box',pathMatch:'full'},
  {path:'list',component:ListComponent},
  {path:'box',component:BoxComponent},
  {path:'detail/:id',component:DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
