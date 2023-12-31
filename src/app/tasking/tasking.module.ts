import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from "@angular/common/http";
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { TodoService } from './todo.service';
import { todoReducer } from './reducer';

@NgModule({
    declarations: [
        TodoListComponent,
        TodoDashboardComponent,
    ],
    imports: [
        BrowserModule,
        StoreModule.forFeature('tdl', todoReducer),
        StoreModule.forFeature('tdd', todoReducer),
        HttpClientModule,
    ],
    exports: [
        TodoDashboardComponent,
        TodoListComponent
    ],
    providers: [TodoService],
    bootstrap: [TodoDashboardComponent, TodoListComponent]
})
export class TaskingModule { }
