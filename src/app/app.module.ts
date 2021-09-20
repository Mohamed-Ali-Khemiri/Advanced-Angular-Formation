import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { UsersModule } from './users/users.module';
import { PageAdminComponent } from './admin/page-admin/page-admin.component';
import { PagesComponent } from './deposita/pages/pages.component';
import { TicketsModule } from './tickets/tickets.module';

@NgModule({
  declarations: [
    AppComponent,
    PageAdminComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
    HomeModule,
    CoreModule,
    AppRoutingModule,
    TicketsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
