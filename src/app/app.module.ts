import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OPEN_WEATHER_TOKEN } from './app.config';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: OPEN_WEATHER_TOKEN,
      useValue: '5a4b2d457ecbef9eb2a71e480b947604',
    },
  ],
})
export class AppModule {}
