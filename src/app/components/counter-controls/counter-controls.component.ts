import { Component ,EventEmitter,output,Output } from '@angular/core';

@Component({
  selector: 'app-counter-controls',
  imports: [],
  templateUrl: './counter-controls.component.html',
  styleUrl: './counter-controls.component.css'
})
export class CounterControlsComponent {
 @Output() increment=new EventEmitter<void>();
 @Output() decrement = new EventEmitter<void>();
 @Output() reset = new EventEmitter<void>();
  increase(){
    this.increment.emit();
  }
  decrease(){
    this.decrement.emit();
  
  }
  resetCount(){
    this.reset.emit();
  }
}
