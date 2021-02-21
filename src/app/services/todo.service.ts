import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

//key that is used to access the data in local storage
const todoListStorageKey = 'Todo_List';

let TODOS = [];

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  todoList : [];

  constructor(private storageService: StorageService) {
    this.todoList = storageService.getData(todoListStorageKey) || TODOS;
  }

  saveList() {
    this.storageService.setData(todoListStorageKey, TODOS);
  }

  // retrieve all the element in the todo list and resolved the promise
  get(query= '') {

    return new Promise(resolve => {
      let data;

      if (query === 'completed' || query === 'active') {
        const isCompleted = query === "completed";
        data = TODOS.filter(todo => todo.isDone === isCompleted);
      } else {
        data = TODOS;
      }      
      resolve(data)
      // this.saveList();
    });
  }

  //adds the new elements into the todos array and resolved the promise
  add(data){
    return new Promise(resolve => {
      TODOS.push(data);
      resolve(data);
      this.saveList();
    });
  }

  //Edit & update the to do element and resolved the promise
  put(changed) {
    return new Promise(resolve => {
      const index = TODOS.findIndex(todo => todo = changed);
      TODOS[index].title = changed.title;
      resolve(changed);
      this.saveList();
    })
  }

  //Delete the to do element and resolve the promise
  delete(selected) {
    return new Promise(resolve => {
      const index = TODOS.findIndex(todo => todo = selected);
      TODOS.splice(index, 1);
      resolve(true);
      this.saveList();
    });
  }

  //Clear Completed To do element
  deleteCompleted() {
    return new Promise(resolve => {
      TODOS = TODOS.filter(todo => !todo.isDone);
      resolve(TODOS);
      this.saveList();
    });
  }

  //Toggle Element when click on to do
  toggle(selected) {
    selected.isDone = !selected.isDone;
    return Promise.resolve();
  }
}
