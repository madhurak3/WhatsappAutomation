import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  constructor() { }

	sendmsg = new FormGroup({
	contact: new FormControl(''),
	message: new FormControl(''),
	timehour: new FormControl(''),
	timemin: new FormControl('')
})

  ngOnInit(): void {
  }

   collectSendMsg()
  {
	console.warn(this.sendmsg.value)
  }

}
