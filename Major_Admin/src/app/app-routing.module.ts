import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CropsComponent } from './components/crops/crops/crops.component';
import { DashboardComponent } from './components/Dashboard/dashboard/dashboard.component';
import { NotfoundComponent } from './components/notfound/notfound/notfound.component';
import { ProductComponent } from './components/product/product/product.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "crops_content", component: CropsComponent },
  { path: "product_content", component: ProductComponent },
  { path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
