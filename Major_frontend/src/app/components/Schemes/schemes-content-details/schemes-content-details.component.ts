import { Component, OnInit } from '@angular/core';
import { SchemesService } from 'src/app/services/schemes/schemes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schemes-content-details',
  templateUrl: './schemes-content-details.component.html',
  styleUrls: ['./schemes-content-details.component.css']
})
export class SchemesContentDetailsComponent implements OnInit {
  schemes_details: any;

  constructor(private schemes:SchemesService, private route:ActivatedRoute) {}

  schemes_id = this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
    this.schemes.getSingleSchemesDetails(this.schemes_id).subscribe((details) => {
      this.schemes_details = details.data;
      console.log(details.data);
    })
  }
}
