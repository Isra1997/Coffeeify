import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CoffeeeBlockComponent } from './coffeee-block/coffeee-block.component';
import { FooterComponent } from './footer/footer.component';
import { Selected } from './shared/Selectd.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CoffeeeBlockComponent,
    FooterComponent,
    Selected
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
