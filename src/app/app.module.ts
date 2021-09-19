import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpaceComponent } from './space/space.component';
import { ColorDirective } from './color.directive';

@NgModule({
  declarations: [
    AppComponent,
    SpaceComponent,
    ColorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
