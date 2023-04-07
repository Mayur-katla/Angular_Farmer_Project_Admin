import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentFormComponent } from './components/Agent/agent-form/agent-form.component';
import { AgentComponent } from './components/Agent/agent/agent.component';
import { ClimateComponent } from './components/Climate/climate/climate.component';
import { CropsFormComponent } from './components/Crops/crops-form/crops-form.component';
import { CropsComponent } from './components/Crops/crops/crops.component';
import { SingleCropsComponent } from './components/Crops/single-crops/single-crops.component';
import { CropsDetailsComponent } from './components/Details/crops-details/crops-details.component';
import { ProductDetailsComponent } from './components/Details/product-details/product-details.component';
import { HomeComponent } from './components/Home/home/home.component';
import { LoginComponent } from './components/login/login/login.component';
import { NewsComponent } from './components/News/news/news.component';
import { NotfoundComponent } from './components/Notfound/notfound/notfound.component';
import { ProductFormComponent } from './components/Product/product-form/product-form.component';
import { ProductComponent } from './components/Product/product/product.component';
import { FoodsComponent } from './components/Product/product_type/foods/foods.component';
import { GrainsComponent } from './components/Product/product_type/grains/grains.component';
import { MachineryComponent } from './components/Product/product_type/machinery/machinery.component';
import { PesticidesComponent } from './components/Product/product_type/pesticides/pesticides.component';
import { SeedsComponent } from './components/Product/product_type/seeds/seeds.component';
import { SchemesContentDetailsComponent } from './components/Schemes/schemes-content-details/schemes-content-details.component';
import { SchemesFormComponent } from './components/Schemes/schemes-form/schemes-form.component';
import { SchemesComponent } from './components/Schemes/schemes/schemes.component';
import { TestingComponent } from './components/Testing/testing/testing.component';
import { ProductBuyComponent } from './components/Product/Buy product/product-buy/product-buy.component';
import { ProductOrderComponent } from './components/Product/Buy product/product-order/product-order.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "Product", component: ProductComponent },
  { path: "Product_form", component: ProductFormComponent },
  { path: "Product_foods", component: FoodsComponent },
  { path: "Product_seeds", component: SeedsComponent },
  { path: "Product_grains", component: GrainsComponent },
  { path: "Product_machinery", component: MachineryComponent },
  { path: "Product_pesticides", component: PesticidesComponent },
  { path: "Agent", component: AgentComponent },
  { path: "Agent_form", component: AgentFormComponent },
  { path: "Crops", component: CropsComponent },
  { path: "Crops_form", component: CropsFormComponent },
  { path: "Crops_details/:name", component: SingleCropsComponent },
  { path: "Schemes_details/:id", component: SchemesContentDetailsComponent },
  { path: "Product_buy/:product_name", component: ProductBuyComponent},
  { path: "Product_Order/:product_name", component: ProductOrderComponent},
  { path: "Testing", component: TestingComponent },
  { path: "Climate", component: ClimateComponent },
  { path: "Schemes", component: SchemesComponent },
  { path: "Schemes_form", component: SchemesFormComponent },
  { path: "News", component: NewsComponent },
  { path: "Login", component: LoginComponent },
  { path: "Product_Details", component: ProductDetailsComponent },
  { path: "Crops_Contents", component: CropsDetailsComponent },
  // {path: "Product_Details/:product_name", component: ProductDetailsComponent},
  { path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
