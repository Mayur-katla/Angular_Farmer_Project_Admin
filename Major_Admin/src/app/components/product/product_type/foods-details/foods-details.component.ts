import { Component, OnInit} from '@angular/core';
import { ProductService } from 'src/app/services/product_services/product.service';
@Component({
  selector: 'app-foods-details',
  templateUrl: './foods-details.component.html',
  styleUrls: ['./foods-details.component.css']
})
export class FoodsDetailsComponent implements OnInit{
  foods_details: any;
  constructor(private product: ProductService){}

  onDelete(single_product:any) {
    this.product.deleteProductDetails(single_product).subscribe((details) => {
      console.log(details.data);
      console.log("Deleted Product Details");
    })
    alert("SuccessFully Deleted product Deleted...");
  }

  ngOnInit(): void {
    this.product.getProductFoodsDetails().subscribe((details) =>{
      this.foods_details = details.data;
      // console.log(details.data);
    })    
  }
}
