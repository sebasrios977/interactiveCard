import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './interactive-card/form/form.component';
import { CardComponent } from './interactive-card/card/card.component';
import { InteractiveCardModule } from './interactive-card/interactive-card.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    InteractiveCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
