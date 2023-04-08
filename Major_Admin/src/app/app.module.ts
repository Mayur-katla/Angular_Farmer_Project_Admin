import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import * as ngxBootstrap from 'ngx-bootstrap';

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
import { SeedsDetailsComponent } from './components/product/product_type/seeds-details/seeds-details.component';
import { FoodsDetailsComponent } from './components/product/product_type/foods-details/foods-details.component';
import { GrainsDetailsComponent } from './components/product/product_type/grains-details/grains-details.component';
import { MachineryDetailsComponent } from './components/product/product_type/machinery-details/machinery-details.component';
import { PesticideDetailsComponent } from './components/product/product_type/pesticide-details/pesticide-details.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { RabiDetailsComponent } from './components/crops/crops_type/rabi-details/rabi-details.component';
import { KharifDetailsComponent } from './components/crops/crops_type/kharif-details/kharif-details.component';
import { ZaidDetailsComponent } from './components/crops/crops_type/zaid-details/zaid-details.component';
import { CropsDetailsComponent } from './components/crops/crops-details/crops-details.component';
import { DashboardAgentComponent } from './components/Dashboard/dashboard-agent/dashboard-agent.component';
import { CommitContentComponent } from './components/commit/commit-content/commit-content.component';

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
    SchemesComponent,
    SeedsDetailsComponent,
    FoodsDetailsComponent,
    GrainsDetailsComponent,
    MachineryDetailsComponent,
    PesticideDetailsComponent,
    ProductDetailsComponent,
    RabiDetailsComponent,
    KharifDetailsComponent,
    ZaidDetailsComponent,
    CropsDetailsComponent,
    DashboardAgentComponent,
    CommitContentComponent
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
