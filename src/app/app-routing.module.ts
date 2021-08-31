import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonpayerComponent } from './buttonpayer/buttonpayer.component';
const routes: Routes = [
 
  {path:'',component: ButtonpayerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
