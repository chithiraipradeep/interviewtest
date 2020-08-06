import { Component, OnInit, ViewChild } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class HomeComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  error: string;
  otp: string;
  @ViewChild('ngOtpInput', { static: false }) ngOtpInput: any;
  @ViewChild('stepper') stepper: MatStepper;
  config = {
    allowNumbersOnly: false,
    length: 5,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '50px',
      'height': '50px',
      'margin': '13px'
    }
  };
  phone: any;

  isEditable = false;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  
    this.registerForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.pattern("[a-zA-Z]+")]],
      gender: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.pattern("[0-9]*")]],
      companyname: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
      jobtitle: ['', [Validators.required, Validators.pattern("[a-zA-Z]+")]],
      experience: ['', [Validators.required, Validators.pattern("[0-9]*")]],
      termscheck: ['', Validators.required]
    });

    this.registerForm.reset();
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.registerForm.invalid);
    console.log(this.registerForm.valid);
    this.registerForm.value.phone = this.phone;
    if (this.registerForm.invalid) {
      return;
    }
    localStorage.setItem("userdata",JSON.stringify(this.registerForm.value));
    console.log(this.registerForm.value);
    this.stepper.next();

  }

  onKeyUpEvent(event: any) {
    console.log(event.target.value);
    event.target.value + ' | '
  }

  next(el) {
    el.setFocus();
  }

  onOtpChange(el) {
    console.log(el);
  }

  telInputObject(obj) {
    console.log(obj);
    obj.setCountry('in');
  }

  onCountryChange(event) {
    console.log(event);
  }

  getNumber(event) {
    this.phone = event;
    console.log(event);
  }
}
