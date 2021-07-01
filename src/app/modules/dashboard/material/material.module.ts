import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';



const material=[MatButtonModule,MatToolbarModule,MatIconModule,MatSidenavModule,MatDividerModule,MatCardModule,FlexLayoutModule]
@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
