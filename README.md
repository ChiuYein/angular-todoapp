# Todo Application with Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.

It is a To-do list application with CRUD (Create, Read, Update, Delete) functionality.

# Setup
Clone the repo

```https://github.com/ChiuYein/angular-todoapp```

Install Dependencies

```npm install```

Run the application

```ng serve```

## Functionality Overview

#### Main todo list
* User able to insert, update, delete and view all todo item
* User able to sort the todo based on the status of: all, active and completed todo. 

#### Sub todo list 
* User able to insert, update, delete and view all the sub todo of main todo 

## Directory Structure
```
├── src
│   ├── app
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── app-routing.module.ts
│   │   ├── components
│   │   │   ├── subtodo
│   │   │   │   ├── subtodo.component.html
│   │   │   │   ├── subtodo.component.scss
│   │   │   │   ├── subtodo.component.spec.ts
│   │   │   │   └── subtodo.component.ts
│   │   │   └── todo
│   │   │       ├── todo.component.html
│   │   │       ├── todo.component.scss
│   │   │       ├── todo.component.spec.ts
│   │   │       └── todo.component.ts
│   │   └── services
│   │       ├── subtodo
│   │       │   ├── subtodo.service.spec.ts
│   │       │   ├── subtodo.service.ts
│   │       │   ├── subtodo-storage.service.spec.ts
│   │       │   └── subtodo-storage.service.ts
│   │       └── todo
│   │           ├── storage.service.spec.ts
│   │           ├── storage.service.ts
│   │           ├── todo.service.spec.ts
│   │           └── todo.service.ts

```


