import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  user: any;

  constructor() { }

  ngOnInit(): void {

    this.user =JSON.parse(localStorage.getItem('userdata'));

  }

}
