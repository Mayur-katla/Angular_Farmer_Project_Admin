import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product_services/product.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {
  product_details_foods: any;
  constructor(private product: ProductService) {}
   
  ngOnInit(): void {
    this.product.getProductDetailsFoods().subscribe((foods) => {
      this.product_details_foods = foods.data; 
      console.log(foods.data)
    })
  }
}
