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
    SchemesFormComponent
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
