import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CounterControlsComponent } from "./components/counter-controls/counter-controls.component";
import { CounterDisplayComponent } from "./components/counter-display/counter-display.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, CounterControlsComponent, CounterDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count:number=0;
  onIncrement(){
    this.count++;
  }
  onDecrement(){
    this.count--;
  }
  onReset(){
    this.count=0;
  }
}
