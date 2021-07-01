import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './modules/dashboard/sidenav/sidenav.component';
import { ProfileComponentComponent } from './profile/profile-component/profile-component.component';
import { SettingsComponentsComponent } from './settings/settings-components/settings-components.component';
// import { DevicesModule } from './devices/devices.module';

const routes: Routes = [
  
  // {
  //   path:'devices',
  //   loadChildren:()=> 
  //   import("./devices/devices.module").then((m) => m.DevicesModule)
  // },
  {
    path:'profile',
    component:ProfileComponentComponent
  },
  {
    path:'',
    component:SidenavComponent
  },
  {
  path:'settings',
  component:SettingsComponentsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
