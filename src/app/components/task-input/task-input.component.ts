import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-task-input',
  imports: [FormsModule],
  templateUrl: './task-input.component.html',
  styleUrl: './task-input.component.css'
})
export class TaskInputComponent {
  task: string = '';
  @Output() taskAdded = new EventEmitter<string>();
  addTask() {
    if (this.task.trim()) {
      this.taskAdded.emit(this.task);
      this.task = '';
    }
  }

}
