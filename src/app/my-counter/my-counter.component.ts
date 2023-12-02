import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../actions';
import { IAppState } from '../reducer';


@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
})
export class MyCounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ counter: IAppState }>) {
    this.count$ = store.select(state => state.counter.count);

  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}