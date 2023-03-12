import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product_services/product.service';

@Component({
  selector: 'app-product-content',
  templateUrl: './product-content.component.html',
  styleUrls: ['./product-content.component.css']
})
export class ProductContentComponent implements OnInit {
  seeds_count: any;
  foods_count: any;
  machinery_count: any;
  grains_count: any;
  pesticides_count: any;

  constructor(private product:ProductService){}

  ngOnInit(): void {
    this.product.getProductSeeds().subscribe((details) => {
      this.seeds_count = details.data;
    })     
    this.product.getProductFoods().subscribe((details) => {
      this.foods_count = details.data;
    })     
    this.product.getProductMachinery().subscribe((details) => {
      this.machinery_count = details.data;
    })     
    this.product.getProductGrains().subscribe((details) => {
      this.grains_count = details.data;
    })     
    this.product.getProductPesticides().subscribe((details) => {
      this.pesticides_count = details.data;
    })     
  }
}
