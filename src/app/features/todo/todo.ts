import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-todo',
  imports: [
    NgForOf,
    FormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  tasks = [{ id: 1, title: 'Sample Task', completed: false }];
  newTask = '';

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({
        id: Date.now(),
        title: this.newTask,
        completed: false,
      });
      this.newTask = '';
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
