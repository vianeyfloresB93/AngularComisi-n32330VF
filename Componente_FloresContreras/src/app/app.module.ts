import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './componentDesafio1/layout/layout.component';
import { ToolBarComponent } from './componentDesafio1/tool-bar/tool-bar.component';
import { MenuComponent } from './componentDesafio1/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ToolBarComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
