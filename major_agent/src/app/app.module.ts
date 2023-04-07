import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BackgroundComponent } from './components/background/background.component';
import { MainBarComponent } from './components/main-bar/main-bar.component';
import { MessageFormComponent } from './components/message-form/message-form.component';
import { CropsFormComponent } from './components/forms/crops-form/crops-form.component';
import { ProductFormComponent } from './components/forms/product-form/product-form.component';
import { NewsFormComponent } from './components/forms/news-form/news-form.component';
import { SchemesFormComponent } from './components/forms/schemes-form/schemes-form.component';
import { LoginComponent } from './components/login/login/login.component';
import { LoginBackgroundComponent } from './components/login/login-background/login-background.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { SignupComponent } from './components/signup/signup/signup.component';
import { SignupFormComponent } from './components/signup/signup-form/signup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BackgroundComponent,
    MainBarComponent,
    MessageFormComponent,
    CropsFormComponent,
    ProductFormComponent,
    NewsFormComponent,
    SchemesFormComponent,
    LoginComponent,
    LoginBackgroundComponent,
    LoginFormComponent,
    SignupComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
