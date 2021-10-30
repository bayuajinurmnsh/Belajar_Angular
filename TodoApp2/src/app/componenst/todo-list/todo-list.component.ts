import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {

  todos:Todo[]=[];

  logTodo:any[]=[];

  ngOnInit(): void{
    this.todos= [
      {
        content: 'First Todo',
        completed: false
      },
      {
        content: 'Second Todo',
        completed: false
      }
    ]
  }

  toggleDone (id:number){
    this.todos.map((v,i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    })
  }

  deteleTodo (id:number){
    this.todos = this.todos.filter((v,i) => i !== id);
  }

  addTodo(todo: Todo){
    this.todos.push(todo);
    this.logTodo.push(todo.content);
  }
}
