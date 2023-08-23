import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from "@angular/common";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private scroller: ViewportScroller) { }

  ngOnInit() {
  }
  goHome() {
    this.scroller.scrollToAnchor("home");
  }
  goDown1() {
    this.scroller.scrollToAnchor("regular");
  }

  goDown2() {
    this.scroller.scrollToAnchor("menu");
  
  }

  goDown3() {
    this.scroller.scrollToAnchor("events");
  }
  goDown4() {
    this.scroller.scrollToAnchor("ourteam");
  }

}
