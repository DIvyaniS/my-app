import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { ScrollingModule } from '@angular/cdk/scrolling';
import { AppComponent } from './app.component';
import { ThreegridComponent } from './components/threegrid/threegrid.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './../material-module';
import {HttpClientModule} from '@angular/common/http';
import { CardExampleComponent } from './components/card-example/card-example.component';
import { EmployeeDetailsServiceService } from './employee-details-service.service';
import { NewFormComponent } from './components/new-form/new-form.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreegridComponent,
    CardExampleComponent,
    NewFormComponent,
    BasicFormComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    // ScrollingModule,
  ],
  providers: [EmployeeDetailsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
