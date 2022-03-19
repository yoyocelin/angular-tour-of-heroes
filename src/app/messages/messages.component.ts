import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //angular only binds to public component properties
  constructor(public messageService: MessageService) { }//this property must be public because it's going to be binded to in the template

  ngOnInit(): void {
  }

}
