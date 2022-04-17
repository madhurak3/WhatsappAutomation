import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css']
})
export class SendMailComponent implements OnInit {

  constructor() { }

  sendemail = new FormGroup({
    senemail: new FormControl(''),
    senpass: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl(''),
    recvemail: new FormControl('')
  })

  ngOnInit(): void {
  }

  collectSendEmail()
  {
	console.log(this.sendemail.value)
  }

}
