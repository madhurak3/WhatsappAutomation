import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  constructor(private readonly fb: FormBuilder) { 
    this.login = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  ngOnInit(): void {
  }

  collectLogin()
  {
    if (this.login.valid) {
      console.log(this.login.getRawValue());
    }
    else {
      console.log('There is a problem with the form');
    }
    
  }

}
