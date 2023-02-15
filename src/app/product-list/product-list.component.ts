import { Component, OnInit, OnChanges, HostListener } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products = products;
  max_length: number = 0;
  scale: number = 0;
  screenWidth: number = 0;

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.calculateScale(this.screenWidth);
    for (var product of products) {
      if (product.button_description.length > this.max_length) {
        this.max_length = product.button_description.length;
      }
    }
  }

  // ngOnChanges(): void {
  //   this.scale = window.innerWidth / window.innerHeight;
  // }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = event.target.innerWidth;
    this.calculateScale(this.screenWidth);
  }

  // The breakpoints for xs, sm, md, lg and xl are 576px, 768px, 992px and 1200px
  calculateScale(width: number) {
    if (width < 576) {
      this.scale = 4;
    } else if (width < 768) {
      this.scale = 6;
    } else if (width < 992) {
      this.scale = 8;
    } else if (width < 1200) {
      this.scale = 10;
    }
  }

  share() {
    window.alert('The product has been shared!');
  }
}
