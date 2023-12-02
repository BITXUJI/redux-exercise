import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { taskState } from "./reducer";
import { fetchTodosSuccess } from "./actions";
@Injectable()
export class TodoService {
  private readonly url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient,
    private store: Store<{ tdl: taskState }>) { }
  loadTodos() {
    return this.http.get<any[]>(this.url).subscribe(
      serviceTodos => {
        this.store.dispatch(fetchTodosSuccess({ todos: serviceTodos }));
      }
    );
  }
  addTodo(todo: any) {
    return this.http.post(this.url, todo);
  }

}