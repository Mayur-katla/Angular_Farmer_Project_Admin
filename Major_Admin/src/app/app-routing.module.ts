import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CropsComponent } from './components/crops/crops/crops.component';
import { DashboardComponent } from './components/Dashboard/dashboard/dashboard.component';
import { NotfoundComponent } from './components/notfound/notfound/notfound.component';
import { ProductComponent } from './components/product/product/product.component';
import { SeedsDetailsComponent } from './components/product/product_type/seeds-details/seeds-details.component';
import { FoodsDetailsComponent } from './components/product/product_type/foods-details/foods-details.component';
import { MachineryDetailsComponent } from './components/product/product_type/machinery-details/machinery-details.component';
import { GrainsDetailsComponent } from './components/product/product_type/grains-details/grains-details.component';
import { PesticideDetailsComponent } from './components/product/product_type/pesticide-details/pesticide-details.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "crops_content", component: CropsComponent },
  { path: "product_content", component: ProductComponent },
  { path: "product/seeds_details", component: SeedsDetailsComponent},
  { path: "product/foods_details", component: FoodsDetailsComponent},
  { path: "product/machinery_details", component: MachineryDetailsComponent},
  { path: "product/grains_details", component: GrainsDetailsComponent},
  { path: "product/pesticide_details", component: PesticideDetailsComponent},
  { path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
