import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskInputComponent } from "./components/task-input/task-input.component";
import { TaskListComponent } from "./components/task-list/task-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, TaskInputComponent, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-manager';
  tasks:string[]=[];
  onTaskAdded(task:string){
    this.tasks.push(task);
  }

}
