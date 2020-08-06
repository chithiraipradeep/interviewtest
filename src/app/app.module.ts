import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOtpInputModule } from  'ng-otp-input';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgOtpInputModule,
    Ng2TelInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
