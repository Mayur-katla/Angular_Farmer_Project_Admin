import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/Home/home/home.component';
import { NavbarComponent } from './components/Home/navbar/navbar.component';
import { FooterComponent } from './components/Home/footer/footer.component';
import { BackgroundContentComponent } from './components/Home/background-content/background-content.component';
import { ProductHomeComponent } from './components/Home/product-home/product-home.component';
import { ProductComponent } from './components/Product/product/product.component';
import { ProductFormComponent } from './components/Product/product-form/product-form.component';
import { AgentComponent } from './components/Agent/agent/agent.component';
import { AgentFormComponent } from './components/Agent/agent-form/agent-form.component';
import { SchemesComponent } from './components/Schemes/schemes/schemes.component';
import { ClimateComponent } from './components/Climate/climate/climate.component';
import { TestingComponent } from './components/Testing/testing/testing.component';
import { NewsComponent } from './components/News/news/news.component';
import { CropsComponent } from './components/Crops/crops/crops.component';
import { ProductSidebarComponent } from './components/Product/product-sidebar/product-sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductContentComponent } from './components/Product/product-content/product-content.component';
import { SeedsComponent } from './components/Product/product_type/seeds/seeds.component';
import { FoodsComponent } from './components/Product/product_type/foods/foods.component';
import { GrainsComponent } from './components/Product/product_type/grains/grains.component';
import { MachineryComponent } from './components/Product/product_type/machinery/machinery.component';
import { PesticidesComponent } from './components/Product/product_type/pesticides/pesticides.component';
import { CropsSidebarComponent } from './components/Crops/crops-sidebar/crops-sidebar.component';
import { CropsContentComponent } from './components/Crops/crops-content/crops-content.component';
import { CropsBackgroundComponent } from './components/Crops/crops-background/crops-background.component';
import { CropsFormComponent } from './components/Crops/crops-form/crops-form.component';
import { AllCropsListComponent } from './components/Crops/all-crops-list/all-crops-list.component';
import { SingleCropsComponent } from './components/Crops/single-crops/single-crops.component';
import { ProductBackgroundComponent } from './components/Product/product-background/product-background.component';
import { LoginComponent } from './components/login/login/login.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { LoginBackgroundComponent } from './components/login/login-background/login-background.component';
import { SchemesBackgroundComponent } from './components/Schemes/schemes-background/schemes-background.component';
import { SchemesContentComponent } from './components/Schemes/schemes-content/schemes-content.component';
import { SchemesFormComponent } from './components/Schemes/schemes-form/schemes-form.component';
import { NotfoundComponent } from './components/Notfound/notfound/notfound.component';
import { CropsHomeComponent } from './components/Home/crops-home/crops-home.component';
import { ProductDetailsComponent } from './components/Details/product-details/product-details.component';
import { CropsDetailsComponent } from './components/Details/crops-details/crops-details.component';
import { SchemesContentDetailsComponent } from './components/Schemes/schemes-content-details/schemes-content-details.component';
import { SchemesHomeComponent } from './components/Home/schemes-home/schemes-home.component';
import { ProductBuyComponent } from './components/Product/Buy product/product-buy/product-buy.component';
import { ProductOrderComponent } from './components/Product/Buy product/product-order/product-order.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    BackgroundContentComponent,
    ProductHomeComponent,
    ProductComponent,
    ProductFormComponent,
    AgentComponent,
    AgentFormComponent,
    SchemesComponent,
    ClimateComponent,
    TestingComponent,
    NewsComponent,
    CropsComponent,
    ProductSidebarComponent,
    ProductContentComponent,
    SeedsComponent,
    FoodsComponent,
    GrainsComponent,
    MachineryComponent,
    PesticidesComponent,
    CropsSidebarComponent,
    CropsContentComponent,
    CropsBackgroundComponent,
    CropsFormComponent,
    AllCropsListComponent,
    SingleCropsComponent,
    ProductBackgroundComponent,
    LoginComponent,
    LoginFormComponent,
    LoginBackgroundComponent,
    SchemesBackgroundComponent,
    SchemesContentComponent,
    SchemesFormComponent,
    NotfoundComponent,
    CropsHomeComponent,
    ProductDetailsComponent,
    CropsDetailsComponent,
    SchemesContentDetailsComponent,
    SchemesHomeComponent,
    ProductBuyComponent,
    ProductOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
