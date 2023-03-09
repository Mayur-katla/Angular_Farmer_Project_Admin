import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product_services/product.service';

@Component({
  selector: 'app-machinery',
  templateUrl: './machinery.component.html',
  styleUrls: ['./machinery.component.css']
})
export class MachineryComponent implements OnInit {
  product_details_machinery: any;
  constructor(private product: ProductService) {}
   
  ngOnInit(): void {
    this.product.getProductDetailsMachinery().subscribe((machinery) => {
      this.product_details_machinery = machinery.data; 
      console.log(machinery.data);
    })
  }
}
