import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { todoReducer } from './reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from "@angular/common/http";
import { TodoService } from './todo.service';
import { MyCounterComponent } from './my-counter/my-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoDashboardComponent,
    MyCounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ tdd: todoReducer, tdl: todoReducer, counter: todoReducer }),
    StoreDevtoolsModule.instrument(),
    HttpClientModule,

  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
