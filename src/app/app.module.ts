import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './compnonet/navbar/navbar.component';
import { OverViewComponent } from './compnonet/over-view/over-view.component';
import { AudienceComponent } from './compnonet/audience/audience.component';
import { ErrorsComponent } from './compnonet/errors/errors.component';
import { GridsterModule } from 'angular-gridster2';
import { RouterModule } from '@angular/router';
import { OverallComponent } from './compnonet/overall/overall.component';
import { FormsModule } from "@angular/forms";
import { HighchartsChartModule } from "highcharts-angular";
import { PerformanceComponent } from './compnonet/performance/performance.component';
import { RationComponent } from './compnonet/ration/ration.component';
import { MapComponent } from './compnonet/map/map.component';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { JqwidgetsComponent } from './compnonet/jqwidgets/jqwidgets.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';



@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    GridsterModule,
    FormsModule,
    HighchartsChartModule,
    jqxGridModule,
    TooltipModule.forRoot(),
   
   
    
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    OverViewComponent,
    AudienceComponent,
    ErrorsComponent,
    OverallComponent,
    PerformanceComponent,
    RationComponent,
    MapComponent,
    JqwidgetsComponent
   
  
 
   
  ],
  
 
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
