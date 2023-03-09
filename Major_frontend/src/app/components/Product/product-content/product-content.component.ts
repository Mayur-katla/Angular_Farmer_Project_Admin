import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product_services/product.service';

@Component({
  selector: 'app-product-content',
  templateUrl: './product-content.component.html',
  styleUrls: ['./product-content.component.css']
})
export class ProductContentComponent implements OnInit {
  product_details: any;
  constructor(private product: ProductService) {}
  
  ngOnInit(): void {
    this.product.getProductDetails().subscribe((details) => {
      this.product_details = details.data;
      console.log(details);
      
    })
  }
}
