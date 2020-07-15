import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToimageComponent } from './toimage/toimage.component';
import { TopdfComponent } from './topdf/topdf.component';


const routes: Routes = [
  {
    path:'',redirectTo:'toimage',pathMatch:'full'
  }
  ,{
    path:'toimage',component:ToimageComponent
  },
  {
    path:'topdf',component:TopdfComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
