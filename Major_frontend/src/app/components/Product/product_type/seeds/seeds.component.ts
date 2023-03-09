import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product_services/product.service';

@Component({
  selector: 'app-seeds',
  templateUrl: './seeds.component.html',
  styleUrls: ['./seeds.component.css']
})

export class SeedsComponent implements OnInit {
  product_details_seeds: any;
  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.product.getProductDetailsSeeds().subscribe((seeds) => {
      this.product_details_seeds = seeds.data;
      console.log(seeds.data)
    })

  }
}
