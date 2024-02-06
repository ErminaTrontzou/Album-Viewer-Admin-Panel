import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartjsModule  } from '@coreui/angular-chartjs';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FontAwesomeModule,
    ChartjsModule 
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
