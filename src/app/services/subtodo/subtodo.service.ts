import { Injectable } from '@angular/core';
import { StorageService } from './subtodo-storage.service'

const subtodoListStorageKey = 'Subtodo_List';

let Subtodos = [];

@Injectable({
  providedIn: 'root'
})
export class SubtodoService {
  subtodosList = [];

  constructor(private storageService: StorageService) { 
    this.subtodosList = storageService.getData(subtodoListStorageKey) || Subtodos;
  }
  
  //give storage service a function that can passed into different CRUD functionality
  saveSubList() {
    this.storageService.setData(subtodoListStorageKey, Subtodos);
  }

  // retrieve all the element in the subtodo list
  get() {
    return new Promise(resolve => resolve(Subtodos));
  }

  //adds the new elements into the subtodos array 
  add(data) {
    return new Promise(resolve => {
      Subtodos.push(data);
      resolve(data);
      this.saveSubList();
    })
  }

  //Edit & update the subtodo element
  put(changed) {
    return new Promise(resolve => {
      const index = Subtodos.findIndex(subtodo => subtodo = changed);
      Subtodos[index].title = changed.title;
      resolve(changed);
      this.saveSubList();
    });
  }

  //Delete the subtodo element
  delete(selected) {
    return new Promise(resolve => {
      const index = Subtodos.findIndex(subtodo => subtodo = selected);
      Subtodos.splice(index,1);
      resolve(true);
      this.saveSubList();
    });
  }
  
  toggle(selected) {
    selected.isDone = !selected.isDone;
    return Promise.resolve();
  }
}
