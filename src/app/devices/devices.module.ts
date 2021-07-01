import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { DeviceListComponent } from '../modules/device-list/device-list.component';
import { DeviceDetailsPageComponent } from './device-details-page/device-details-page.component';
import { DeviceAdditionComponent } from './device-addition/device-addition.component';



@NgModule({
  declarations: [
    // DeviceListComponent,
    DeviceDetailsPageComponent,
    DeviceAdditionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DeviceAdditionComponent,
    DeviceDetailsPageComponent,
  ]
})
export class DevicesModule { }
