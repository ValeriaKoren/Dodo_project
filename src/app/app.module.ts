import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DodoComponent } from './dodo_pizza/dodo_pizza.component';
import { DodoService } from './pizza_service/dodo_pizza.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
