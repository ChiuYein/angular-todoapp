import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TodoService } from '../../services/todo.service';
import { SubtodoService } from '../../services/subtodo.service'


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [TodoService,SubtodoService]  
})

export class TodoComponent implements OnInit {
  todos;
  activeTasks;
  newTodo; 
  path;

  constructor(private todoService: TodoService, private route: ActivatedRoute) { }
  
  //Read Todo Functionality
  getToDos(query='') {
    return this.todoService.get(query).then(todos => {
      this.todos = todos;
      this.activeTasks = this.todos.filter(todo => !todo.isDone).length;
    });
  }

  //Create new Todo Functionality
  addToDo() {
    this.todoService.add({title: this.newTodo, isDone: false}).then(() =>{
      return this.getToDos();
    }).then(() => {
      this.newTodo = ""; //clear input form value
    });
  }

  //Update Todo functionality
  updateTodo(todo, newValue) {
    todo.title = newValue;
    return this.todoService.put(todo).then(() => {
      todo.editing = false;
      return this.getToDos();
    });
  }

  //Delete Todo Functionality
  destroyTodo(todo) {
    this.todoService.delete(todo).then(() => {
      return this.getToDos();
    });
  }

  //Clear Completed Todo
  clearCompleted() {
    this.todoService.deleteCompleted().then(() => {
      return this.getToDos();
    })
  }

  toggleTodo(todo) {
    this.todoService.toggle(todo).then(() => {
      return this.getToDos();
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.path = params['status'];
      this.getToDos(this.path);
    });    
  }

}
