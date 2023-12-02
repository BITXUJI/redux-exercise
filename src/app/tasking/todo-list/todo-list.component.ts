import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addTodo, toggleTodo, removeTodo } from '../actions';
import { TodoService } from '../todo.service';
import { taskState } from '../reducer';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos$: Observable<any[]>;

  constructor(private store: Store<{ tdl: taskState }>,
    private service: TodoService
  ) {
    this.todos$ = this.store.select(state => state.tdl.todos);
  }
  ngOnInit() {
    this.service.loadTodos();
  }

  addTodo(input: HTMLInputElement) {
    if (!input.value) return;
    this.store.dispatch(addTodo({ title: input.value }));
    input.value = '';
  }

  toggleTodo(todoId: number) {
    this.store.dispatch(toggleTodo({ id: todoId }));
  }

  removeTodo(todoId: number) {
    this.store.dispatch(removeTodo({ id: todoId }));
  }
}
