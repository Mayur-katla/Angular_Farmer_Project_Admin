import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product_services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-buy',
  templateUrl: './product-buy.component.html',
  styleUrls: ['./product-buy.component.css']
})
export class ProductBuyComponent implements OnInit {
  product_details: any;

  constructor(private product:ProductService, private route:ActivatedRoute) {}

  single_product:any;

  ngOnInit(): void {
    this.single_product = this.route.snapshot.paramMap.get("product_name");

    this.product.getProductBuy(this.single_product).subscribe((details) => {
      console.log(details.data);    
      this.product_details = details.data;
    })
  }
}
