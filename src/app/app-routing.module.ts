import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectComponent } from './project/project.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path:'project',
    component:ProjectComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'settings',
    component:SettingsComponent
  },
  {
    path:'activities',
    component:ActivitiesComponent
  },
  {
    path:'devicelist',
    component:DeviceListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
