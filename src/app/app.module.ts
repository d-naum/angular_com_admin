import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CredentialsInterceptor } from './interceptors/credentials.interceptor';
import { PublicModule } from './public/public.module';
import { SecureModule } from './secure/secure.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    SecureModule,
    BrowserAnimationsModule
  ],
  providers: [
   {
     provide:HTTP_INTERCEPTORS,
     useClass:CredentialsInterceptor,
     multi:true
   }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
