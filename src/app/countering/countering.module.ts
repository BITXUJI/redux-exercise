import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { counterReducer } from './reducer';


@NgModule({
    declarations: [
        MyCounterComponent
    ],
    imports: [
        BrowserModule,
        StoreModule.forFeature('counter', counterReducer),
    ],
    exports: [
        MyCounterComponent,
        StoreModule
    ],
    providers: [],
    bootstrap: [MyCounterComponent]
})
export class CounteringModule { }
