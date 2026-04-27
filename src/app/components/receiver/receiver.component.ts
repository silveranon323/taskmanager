import { Component ,input,Input} from '@angular/core';

@Component({
  selector: 'app-receiver',
  imports: [],
  templateUrl: './receiver.component.html',
  styleUrl: './receiver.component.css'
})
export class ReceiverComponent {

  @Input() receivedMessage:string="";

}
