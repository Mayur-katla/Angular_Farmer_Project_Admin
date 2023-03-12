import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/Dashboard/dashboard/dashboard.component';
import { DashboardSidebarComponent } from './components/Dashboard/dashboard-sidebar/dashboard-sidebar.component';
import { DashboardContentComponent } from './components/Dashboard/dashboard-content/dashboard-content.component';
import { CropsComponent } from './components/crops/crops/crops.component';
import { CropsContentComponent } from './components/crops/crops-content/crops-content.component';
import { NotfoundComponent } from './components/notfound/notfound/notfound.component';
import { ProductComponent } from './components/product/product/product.component';
import { ProductContentComponent } from './components/product/product-content/product-content.component';
import { SchemesComponent } from './components/schemes/schemes/schemes.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardSidebarComponent,
    DashboardContentComponent,
    CropsComponent,
    CropsContentComponent,
    NotfoundComponent,
    ProductComponent,
    ProductContentComponent,
    SchemesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
