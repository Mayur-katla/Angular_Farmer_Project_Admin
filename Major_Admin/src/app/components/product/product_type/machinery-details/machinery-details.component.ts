import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product_services/product.service';

@Component({
  selector: 'app-machinery-details',
  templateUrl: './machinery-details.component.html',
  styleUrls: ['./machinery-details.component.css']
})
export class MachineryDetailsComponent implements OnInit {
  machinery_details: any;
  constructor(private product: ProductService){}

  onDelete(single_product:any) {
    this.product.deleteProductDetails(single_product).subscribe((details) => {
      console.log(details.data);
      console.log("Deleted Product Details");
    })
    alert("SuccessFully Deleted product Deleted...");
  }

  ngOnInit(): void {
    this.product.getProductMachineryDetails().subscribe((details) =>{
      this.machinery_details = details.data;
      // console.log(details.data);
    })    
  }
}
