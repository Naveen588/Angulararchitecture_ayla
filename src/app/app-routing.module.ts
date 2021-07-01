import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevicesModule } from './devices/devices.module';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {
    path:'project',
    component:ProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
