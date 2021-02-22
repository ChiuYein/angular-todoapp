import { Component, OnInit } from '@angular/core';

import { SubtodoService } from '../../services/subtodo/subtodo.service'

@Component({
  selector: 'app-subtodo',
  templateUrl: './subtodo.component.html',
  styleUrls: ['./subtodo.component.scss'],
  providers: [SubtodoService]
})

export class SubtodoComponent implements OnInit {
  subtodos;
  activeSubTasks;
  newSubtodo;

  constructor(private subtodoService: SubtodoService) { }

  getSubtodos() {
    return this.subtodoService.get().then(subtodos => {
      this.subtodos = subtodos;
      this.activeSubTasks = this.subtodos.filter(subtodo => !subtodo.isDone).length;
    });
  }

  addSubtodo() {
    this.subtodoService.add({ title: this.newSubtodo, isDone: false }).then(() =>{
      return this.getSubtodos();
    }).then(() => {
      this.newSubtodo = '';
    })
  }

  updateSubtodo(subtodo, newValue) {
    subtodo.title = newValue;
    return this.subtodoService.put(subtodo).then(() => {
      subtodo.editing = false;
      return this.getSubtodos();
    })
  }

  destroySubtodo(subtodo) {
    this.subtodoService.delete(subtodo).then(() =>{
      return this.getSubtodos();
    })
  }

  toggleSubtodo(subtodo) {
    this.subtodoService.toggle(subtodo).then(() => {
      return this.getSubtodos();
    });
  }

  ngOnInit() {
    this.getSubtodos();
  }

}
