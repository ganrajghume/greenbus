import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectBusComponent } from './book-bus/select-bus/select-bus.component';


const routes: Routes = [
  {path:'',component:SelectBusComponent},
  // {path:'search',component:BusSearchResultComponent},
  // {path:'user-form',component:UserFormComponent},
  // {path:'print',component:PrintComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
