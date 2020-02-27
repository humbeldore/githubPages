import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppWeightModule } from './components/weight/weight.module';
import { AppShopModule } from './components/shop/shop.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,

    AppWeightModule,
    AppShopModule,
    HttpClientModule
  ],
  providers: [Pipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
