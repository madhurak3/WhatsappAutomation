import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
	login = new FormGroup({
	username: new FormControl(''),
	password: new FormControl('')
})

  ngOnInit(): void {
  }

  collectLogin()
  {
    console.log('Register Form Value ',this.login.value)
  }

}
