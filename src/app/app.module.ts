import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DevicesModule } from './devices/devices.module';
import { EndUsersModule } from './end-users/end-users.module';
import { ProfileComponentComponent } from './profile/profile-component/profile-component.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DevicesModule,
    EndUsersModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
