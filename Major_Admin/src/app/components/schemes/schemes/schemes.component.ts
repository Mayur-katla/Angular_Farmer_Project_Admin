import { Component, OnInit } from '@angular/core';
import { CropsService } from 'src/app/services/crops_services/crops.service';

@Component({
  selector: 'app-schemes',
  templateUrl: './schemes.component.html',
  styleUrls: ['./schemes.component.css']
})
export class SchemesComponent implements OnInit {
  schemes_details: any;
  constructor(private schemes:CropsService){}

  onDeleteSchemes(schemes:any) {
    this.schemes.deleteSchemesDetails(schemes).subscribe((details) => {
      console.log(details.data);
      // console.log("Deleted Product Details");
    })
    alert("SuccessFully Deleted schemes Deleted...");
  }

  ngOnInit(): void {
    this.schemes.getSchemes().subscribe((details) => {
      this.schemes_details = details.data;
      console.log("Schemes Details");      
    })
  }
}
