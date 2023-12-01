import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from '../reducer';
import { clearTodos } from '../actions';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent {
  todos$: Observable<any[]>;
  lastUpdate$: Observable<Date | null>;

  constructor(private store: Store<{ tdd: IAppState }>) {
    this.todos$ = this.store.select(state => state.tdd.todos);       // Use the select method with your selector
    this.lastUpdate$ = this.store.select(state => state.tdd.lastUpdate); // Same as above for lastUpdate
  }

  clearTodos() {
    this.store.dispatch(clearTodos()); // Assuming clearTodos is an action creator
  }
}
