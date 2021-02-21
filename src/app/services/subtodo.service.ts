import { Injectable } from '@angular/core';

let Subtodos = [];

@Injectable({
  providedIn: 'root'
})
export class SubtodoService {

  constructor() { }

  get() {
    return new Promise(resolve => resolve(Subtodos));
  }

  add(data) {
    return new Promise(resolve => {
      Subtodos.push(data);
      resolve(data);
    })
  }

  put(changed) {
    return new Promise(resolve => {
      const index = Subtodos.findIndex(subtodo => subtodo = changed);
      Subtodos[index].title = changed.title;
      resolve(changed);
    });
  }

  delete(selected) {
    return new Promise(resolve => {
      const index = Subtodos.findIndex(subtodo => subtodo = selected);
      Subtodos.splice(index,1);
      resolve(true);
    });
  }
  
  toggle(selected) {
    selected.isDone = !selected.isDone;
    return Promise.resolve();
  }
}
