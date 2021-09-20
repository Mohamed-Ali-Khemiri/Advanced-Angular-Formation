import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { UsersModule } from './users/users.module';
import { PageAdminComponent } from './admin/page-admin/page-admin.component';
import { PagesComponent } from './deposita/pages/pages.component';
import { TicketsModule } from './tickets/tickets.module';
import { authProvider } from './shared/interceptors/auth.interceptor';
import { LoginModule } from './login/login.module';
import { fakeBackendProvider } from './shared/interceptors/fake-backend.interceptor';

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
    TicketsModule,
    LoginModule
  ],
  providers: [
    [
      authProvider,
      fakeBackendProvider
    ]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
