import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
@Injectable()
export class TodoService {
  private readonly url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }
  getTodos() {
    return this.http.get<any[]>(this.url);
  }
  addTodo(todo: any) {
    return this.http.post(this.url, todo);
  }

}