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

  ngOnInit(): void {
    this.scale = Math.round((10 * window.innerWidth) / window.innerHeight);
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
    this.scale = Math.round(
      (10 * event.target.innerWidth) / event.target.innerHeight
    );
  }

  share() {
    window.alert('The product has been shared!');
  }
}
