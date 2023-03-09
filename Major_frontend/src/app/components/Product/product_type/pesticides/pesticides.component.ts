import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product_services/product.service';

@Component({
  selector: 'app-pesticides',
  templateUrl: './pesticides.component.html',
  styleUrls: ['./pesticides.component.css']
})
export class PesticidesComponent implements OnInit {
  product_details_pesticides: any;
  constructor(private product: ProductService) {}
   
  ngOnInit(): void {
    this.product.getProductDetailsPesticides().subscribe((pesticides) => {
      this.product_details_pesticides = pesticides.data; 
      console.log(pesticides.data);
    })
  }
}
