import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DevicesModule } from './devices/devices.module';
import { EndUsersModule } from './end-users/end-users.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DevicesModule,
    EndUsersModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
