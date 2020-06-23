import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CoffeeeBlockComponent } from './coffeee-block/coffeee-block.component';

@NgModule({
  declarations: [
    AppComponent,

    NavBarComponent,
    CoffeeeBlockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
