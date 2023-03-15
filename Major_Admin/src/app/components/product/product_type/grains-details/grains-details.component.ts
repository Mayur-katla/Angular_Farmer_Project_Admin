import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product_services/product.service';

@Component({
  selector: 'app-grains-details',
  templateUrl: './grains-details.component.html',
  styleUrls: ['./grains-details.component.css']
})
export class GrainsDetailsComponent implements OnInit {
  grains_details: any;
  constructor(private product: ProductService){}

  onDelete(single_product:any) {
    this.product.deleteProductDetails(single_product).subscribe((details) => {
      console.log(details.data);
      console.log("Deleted Product Details");
    })
    alert("SuccessFully Deleted product Deleted...");
  }

  ngOnInit(): void {
    this.product.getProductGrainsDetails().subscribe((details) =>{
      this.grains_details = details.data;
      // console.log(details.data);
    })    
  }
}
