import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SchemesService } from 'src/app/services/schemes/schemes.service';

@Component({
  selector: 'app-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.css']
})
export class ProductOrderComponent {

  constructor(private order:SchemesService) {}

  userValidationOrder = new FormGroup({
    'fullname' : new FormControl('', Validators.required),
    'email' : new FormControl('', Validators.required),
    'phonenumber' : new FormControl('', Validators.required),
    'address' : new FormControl('', Validators.required),
    'pincode' : new FormControl('', Validators.required),
    'payment' : new FormControl('', Validators.required)
  })

  onSubmitOrder() {
    if(this.userValidationOrder.valid){
      this.order.createorderNow(this.userValidationOrder.value).subscribe((details) => {
        console.log(details.data);        
      })
      alert("Your Order has been placed successfully...");
    }
  }

  ngOnInit(): void {
    
  }

}
