import { Component, OnInit } from '@angular/core';
import {MsgService} from '../msgServe/msg.service'
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(public serve:MsgService) { }

  ngOnInit() {
    
  }

}
