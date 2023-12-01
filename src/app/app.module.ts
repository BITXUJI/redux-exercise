import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Replacing HttpModule with HttpClientModule
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { todoReducer } from './reducer'; // Assuming rootReducer is your combined reducers

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ tdd: todoReducer, tdl: todoReducer }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
