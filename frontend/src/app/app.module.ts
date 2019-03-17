import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularMaterialModule } from './angular-material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from "./auth/auth-interceptor";
import { ErrorInterceptor } from "./error-interceptor";
import { ErrorComponent } from "./error/error.component";
import { PostsModule } from "./posts/posts.module";




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    PostsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},
  {provide: HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true}],
  
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule { }
