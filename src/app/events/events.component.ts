import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  Imagesdelatils = [    
    { "id": 1, "name": "Art", "url": "assets/events/1.jpeg" },   
    { "id": 2, "name": "Art", "url": "assets/events/1.jpeg" },    
    { "id": 3, "name": "Art", "url": "assets/events/1.jpeg" },    
    { "id": 4, "name": "Art", "url": "assets/events/1.jpeg" },    
    { "id": 4, "name": "Art", "url": "assets/events/1.jpeg" }
  ]
  constructor() { }
  ngOnInit() {
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<span>&#8249</span>', '<span>&#8250</span>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
