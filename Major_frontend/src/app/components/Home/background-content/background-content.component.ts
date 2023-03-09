import { Component, OnInit } from '@angular/core';

declare function change():void;

@Component({
  selector: 'app-background-content',
  templateUrl: './background-content.component.html',
  styleUrls: ['./background-content.component.css']
})
export class BackgroundContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    change();
  }

}
