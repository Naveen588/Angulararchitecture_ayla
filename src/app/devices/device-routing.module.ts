import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { DeviceAdditionComponent } from "./device-addition/device-addition.component";
import { DeviceDetailsPageComponent } from "./device-details-page/device-details-page.component";
import { DeviceListComponent } from "./device-list/device-list.component";

const deviceRoutes:Routes = [
    
    {
        path:'device-list',
        component:DeviceListComponent
    },
    {
        path:'device-details-page',
        component:DeviceDetailsPageComponent
    },
    {
        path:'device-addition',
        component:DeviceAdditionComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(deviceRoutes)],
    exports: []
})
export class deviceRoutingModule {

}