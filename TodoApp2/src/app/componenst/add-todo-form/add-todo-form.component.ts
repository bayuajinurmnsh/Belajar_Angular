import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent {

  @Output() newTodoEvent = new EventEmitter<Todo>();

  inputTodo:string ="";

  valid: any[] = [];

  addTodo(){
    const todo: Todo={
      content:this.inputTodo,
      completed:false
    };
    this.newTodoEvent.emit(todo)
    this.inputTodo ="";

   
  }

}
