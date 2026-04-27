import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SenderComponent } from "./components/sender/sender.component";
import { ReceiverComponent } from "./components/receiver/receiver.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, SenderComponent, ReceiverComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  message:string="";
  receivedMessage(msg:string){
    this.message=msg;

  }
  }

