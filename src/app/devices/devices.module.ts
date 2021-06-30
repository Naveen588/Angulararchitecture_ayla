import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceDetailsPageComponent } from './device-details-page/device-details-page.component';
import { DeviceAdditionComponent } from './device-addition/device-addition.component';
import { deviceRoutingModule } from './device-routing.module';



@NgModule({
  declarations: [
    DeviceListComponent,
    DeviceDetailsPageComponent,
    DeviceAdditionComponent
  ],
  imports: [
    CommonModule,
    deviceRoutingModule
  ],
  exports: [
    DeviceAdditionComponent,
    DeviceDetailsPageComponent,
    DeviceListComponent
  ]
})
export class DevicesModule { }
