import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { DashboardRoutingModule } from './dashboard-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';

/* Components */
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LinechartComponent } from './components/linechart/linechart.component';

/* Material imports */
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule  } from "@angular/material/input";
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { InfoCardComponent } from './components/info-card/info-card.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LinechartComponent,
    InfoCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    DashboardRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ChartsModule
  ],
  exports:[
  ]
})
export class DashboardModule { }
