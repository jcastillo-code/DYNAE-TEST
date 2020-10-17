import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Components */
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';

/* Angular Material */
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatDividerModule } from "@angular/material/divider";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
//import { MatLineModule } from "@angular/material";


import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule, 
    MatButtonModule, 
    MatMenuModule, 
    //MatLineModule, 
    MatListModule,
    FlexLayoutModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ]
})
export class ShareModule { }
