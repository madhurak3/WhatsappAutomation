import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-send-image',
  templateUrl: './send-image.component.html',
  styleUrls: ['./send-image.component.css']
})
export class SendImageComponent implements OnInit {

  constructor() { }

  sendimage = new FormGroup({
    recvcontact: new FormControl(''),
    imgpath: new FormControl('')
  })


  ngOnInit(): void {
  }

  collectSendImage()
  {
	console.log(this.sendimage.value)
  }

}
