import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DevicesModule } from './devices/devices.module';

const routes: Routes = [
  
  {
    path:'devices',
    loadChildren:()=> 
    import("./devices/devices.module").then((m) => m.DevicesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
