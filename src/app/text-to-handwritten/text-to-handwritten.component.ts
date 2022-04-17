import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-text-to-handwritten',
  templateUrl: './text-to-handwritten.component.html',
  styleUrls: ['./text-to-handwritten.component.css']
})
export class TextToHandwrittenComponent implements OnInit {

  constructor() { }

  texttohand = new FormGroup({
    text: new FormControl(''),
    save: new FormControl('')
  })

  ngOnInit(): void {
  }

  collectTextToHand()
  {
	console.log(this.texttohand.value)
  }

}
