import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { TaskingModule } from './tasking/tasking.module';
import { CounteringModule } from './countering/countering.module';
import { reducers } from './reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    TaskingModule,
    CounteringModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
