import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
	register = new FormGroup({
	fname: new FormControl(''),
	lname: new FormControl(''),
	contact: new FormControl(''),
	email: new FormControl(''),
	uname: new FormControl(''),
	pass: new FormControl(''),
	rpass: new FormControl('')
})

  ngOnInit(): void {
  }

  collectRegister()
  {
	console.log('Register Form Value ',this.register.value)
  }
  getinfo()
  {
	alert("Displayed")
  }

}
