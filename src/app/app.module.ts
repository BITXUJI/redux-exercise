import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { TaskingModule } from './tasking/tasking.module';
import { CounteringModule } from './countering/countering.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    TaskingModule,
    CounteringModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
