import { Component,EventEmitter,Output } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-sender',
  imports: [FormsModule],
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.css'
})
export class SenderComponent {
  message:string="";
  @Output() messageEvent=new EventEmitter<string>();
  sendMessage(){
    this.messageEvent.emit(this.message);
    console.log(this.message);
  }
}
