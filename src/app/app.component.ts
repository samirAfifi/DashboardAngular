import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  




  slides: string [] = ['./assets/imgs/doge.jpg', './assets/imgs/cat.jpg', './assets/imgs/laika.jpg' ]
  i=0;

  getSlide() {
      return this.slides[this.i];
  }

  getPrev() {
      this.i = this.i===0 ? 0 : this.i - 1;
  }
//edit here    
  getNext() {
      this.i = this.i===this.slides.length-1 ? this.i : this.i + 1;
  }
}