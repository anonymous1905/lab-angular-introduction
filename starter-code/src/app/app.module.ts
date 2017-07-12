import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Iteration1Component } from './iteration1/iteration1.component';
import { Iteration2mainComponent } from './iteration2main/iteration2main.component';
import { Iteration2commentsComponent } from './iteration2comments/iteration2comments.component';
import { Iteration3Component } from './iteration3/iteration3.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Iteration1Component,
    Iteration2mainComponent,
    Iteration2commentsComponent,
    Iteration3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
