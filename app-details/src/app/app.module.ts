import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    EmptyRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
