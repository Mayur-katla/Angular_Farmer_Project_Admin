import { Component, OnInit} from '@angular/core';
import { ProductService } from 'src/app/services/product_services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product_details: any;
  constructor(private product: ProductService, private route:ActivatedRoute) { }

  // single_details = this.route.snapshot.paramMap.get("product_name");

  productDelete(single_details:any) {
    // console.log("Hello World!");    
    this.product.getSingleProductDetails(single_details).subscribe((details) => {
      console.log(details.data);      
      console.log("Deleted...");      
    })
    alert("Successfully deleted...");
  }

  ngOnInit(): void {
    this.product.getProductDetails().subscribe((details) => {
      this.product_details = details.data;
      // this.datasource = this.product_details;
      console.log(details.data);
    })
    
    // this.userDelete();
  }
}
