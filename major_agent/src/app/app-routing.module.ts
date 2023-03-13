import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CropsFormComponent } from './components/forms/crops-form/crops-form.component';
import { NewsFormComponent } from './components/forms/news-form/news-form.component';
import { ProductFormComponent } from './components/forms/product-form/product-form.component';
import { SchemesFormComponent } from './components/forms/schemes-form/schemes-form.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login/login.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "Crops_form", component: CropsFormComponent },
  { path: "Products_form", component: ProductFormComponent },
  { path: "News_form", component: NewsFormComponent },
  { path: "Schemes_form", component: SchemesFormComponent },
  { path: "Login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
