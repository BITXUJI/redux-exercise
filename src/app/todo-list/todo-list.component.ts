import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addTodo, toggleTodo, removeTodo, fetchTodosSuccess } from '../actions';
import { IAppState } from '../reducer';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos$: Observable<any[]>;

  constructor(private store: Store<{ tdl: IAppState }>,
    private service: TodoService
  ) {
    this.todos$ = this.store.select(state => state.tdl.todos);
  }
  ngOnInit() {
    this.service.getTodos().subscribe(
      serviceTodos => {
        this.store.dispatch(fetchTodosSuccess({ todos: serviceTodos }));
      }
    );
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
