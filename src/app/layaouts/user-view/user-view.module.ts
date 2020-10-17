import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserViewRoutingModule } from "./user-view-routing.module";
import { UserViewComponent } from './user-view.component';

import { ShareModule } from "../../share/share.module";

import { MatSidenavModule } from "@angular/material/sidenav";

@NgModule({
  declarations: [
    UserViewComponent
  ],
  imports: [
    CommonModule,
    UserViewRoutingModule,
    ShareModule,
    MatSidenavModule
  ]
})
export class UserViewModule { }
