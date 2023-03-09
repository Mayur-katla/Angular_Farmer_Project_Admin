import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product_services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(private product: ProductService) { }

  userProductValidation = new FormGroup(
    {
      'product_name': new FormControl('', Validators.required),
      'product_brand': new FormControl('', Validators.required),
      'product_price':new FormControl('',Validators.required),
      'product_type':new FormControl('', Validators.required),
      'product_description':new FormControl('', Validators.required)
    }
  )

  onSubmitProduct():void {
    if(this.userProductValidation.valid) {
      this.product.createProduct(this.userProductValidation.value).subscribe((details) => {
        console.log(details);        
      })
    }
  }

  ngOnInit(): void {

  }

}
