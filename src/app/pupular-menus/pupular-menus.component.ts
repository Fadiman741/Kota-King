import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-pupular-menus',
  templateUrl: './pupular-menus.component.html',
  styleUrls: ['./pupular-menus.component.css']
})
export class PupularMenusComponent implements OnInit {

  Imagesdelatils = [    
    { "id": 1, "name": "Art", "url": "assets/gallery/3.jpg" },   
    { "id": 2, "name": "Art", "url": "assets/gallery/4.jpg" },    
    { "id": 3, "name": "Art", "url": "assets/gallery/5.jpg" },    
    { "id": 4, "name": "Art", "url": "assets/gallery/6.jpg" },    
    { "id": 4, "name": "Art", "url": "assets/gallery/7.png" }
    
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
