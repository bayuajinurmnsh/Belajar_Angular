import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componenst/navbar/navbar.component';
import { TodoListComponent } from './componenst/todo-list/todo-list.component';
import { AddTodoFormComponent } from './componenst/add-todo-form/add-todo-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodoListComponent,
    AddTodoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
