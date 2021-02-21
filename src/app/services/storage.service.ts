import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  localStorage: Storage;

  constructor() { 
    this.localStorage = window.localStorage;
  }

  getData(key:string): any {
    return JSON.parse(this.localStorage.getItem(key));
  }

  setData(key:string, data: any) {
    this.localStorage.setItem(key, JSON.stringify(data));
  }
}
