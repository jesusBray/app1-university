import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

import { DashboardComponent } from "./dashboard.component";
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatSortModule } from '@angular/material/sort';
import { CdkTableModule} from '@angular/cdk/table';

import { MatTableModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';

import { HttpClientModule } from '@angular/common/http';

import { DashboardService } from "./dashboard.service";

@NgModule({
  declarations: [
    DashboardComponent,
    ToolbarComponent,
  ],
  exports: [
    DashboardComponent,
  ],
  providers: [
    DashboardService
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatTableModule,
    CdkTableModule,
    MatButtonModule,
    HttpClientModule,
    MatInputModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DashboardModule { }
