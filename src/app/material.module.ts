
import { NgModule } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { MatStepperModule } from "@angular/material/stepper";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';


@NgModule({
  exports: [
    MatTableModule,
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ]
})
export class MaterialModule { }
