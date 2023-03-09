import { Component, OnInit } from '@angular/core';
import { SchemesService } from 'src/app/services/schemes/schemes.service';

@Component({
  selector: 'app-schemes-content',
  templateUrl: './schemes-content.component.html',
  styleUrls: ['./schemes-content.component.css']
})
export class SchemesContentComponent implements OnInit {
  schemes_details: any;

  constructor(private schemes:SchemesService) {}

  ngOnInit(): void {
    this.schemes.getSchemesData().subscribe((details) => {
      this.schemes_details = details.data;
      console.log(details.data);      
    })
  }
}
