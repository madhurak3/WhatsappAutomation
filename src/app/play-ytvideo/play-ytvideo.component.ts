import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-play-ytvideo',
  templateUrl: './play-ytvideo.component.html',
  styleUrls: ['./play-ytvideo.component.css']
})
export class PlayYtvideoComponent implements OnInit {

  constructor() { }

  playyoutube = new FormGroup({
    topic: new FormControl('')
  })

  ngOnInit(): void {
  }

  collectPlayOnYoutube()
  {
	console.log(this.playyoutube.value)
  }

}
