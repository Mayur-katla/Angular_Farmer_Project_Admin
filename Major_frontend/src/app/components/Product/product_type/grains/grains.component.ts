import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product_services/product.service';

@Component({
  selector: 'app-grains',
  templateUrl: './grains.component.html',
  styleUrls: ['./grains.component.css']
})
export class GrainsComponent implements OnInit {
  product_details_grains: any;
  constructor(private product: ProductService) {}
   
  ngOnInit(): void {
    this.product.getProductDetailsGrains().subscribe((grains) => {
      this.product_details_grains = grains.data;
      console.log(grains.data)
    })
  }
}
