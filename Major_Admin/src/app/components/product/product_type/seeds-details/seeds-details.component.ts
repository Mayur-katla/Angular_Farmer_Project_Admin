import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product_services/product.service';

@Component({
  selector: 'app-seeds-details',
  templateUrl: './seeds-details.component.html',
  styleUrls: ['./seeds-details.component.css']
})
export class SeedsDetailsComponent {
  seeds_details: any;
  constructor(private product: ProductService){}

  onDelete(single_product:any) {
    this.product.deleteProductDetails(single_product).subscribe((details) => {
      console.log(details.data);
      console.log("Deleted Product Details");
    })
    alert("SuccessFully Deleted product Deleted...");
  }

  ngOnInit(): void {
    this.product.getProductSeedsDetails().subscribe((details) =>{
      this.seeds_details = details.data;
      // console.log(details.data);
    })    
    
  }
}
