import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product_services/product.service';

@Component({
  selector: 'app-pesticide-details',
  templateUrl: './pesticide-details.component.html',
  styleUrls: ['./pesticide-details.component.css']
})
export class PesticideDetailsComponent {
  pesticides_details: any;
  constructor(private product: ProductService){}

  onDelete(single_product:any) {
    this.product.deleteProductDetails(single_product).subscribe((details) => {
      console.log(details.data);
      console.log("Deleted Product Details");
    })
    alert("SuccessFully Deleted product Deleted...");
  }

  ngOnInit(): void {
    this.product.getProductPesticidesDetails().subscribe((details) =>{
      this.pesticides_details = details.data;
      // console.log(details.data);
    })    
  }
}
