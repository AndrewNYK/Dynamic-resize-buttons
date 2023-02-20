import {
  Component,
  OnInit,
  OnChanges,
  HostListener,
  ElementRef,
} from '@angular/core';

import { products } from '../products';
import { SCREEN_SIZE } from '../services/screen-size.enum';
import { ResizeService } from '../services/resize.services';

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

  prefix = 'is-';
  sizes = [
    {
      id: SCREEN_SIZE.XS,
      name: 'xs',
      buttonColour: 'blue',
      scale: 4,
      css: `d-block d-sm-none`,
    },
    {
      id: SCREEN_SIZE.SM,
      name: 'sm',
      buttonColour: 'red',
      scale: 6,
      css: `d-none d-sm-block d-md-none`,
    },
    {
      id: SCREEN_SIZE.MD,
      name: 'md',
      buttonColour: 'green',
      scale: 8,
      css: `d-none d-md-block d-lg-none`,
    },
    {
      id: SCREEN_SIZE.LG,
      name: 'lg',
      buttonColour: 'yellow',
      scale: 10,
      css: `d-none d-lg-block d-xl-none`,
    },
    {
      id: SCREEN_SIZE.XL,
      name: 'xl',
      buttonColour: 'green',
      scale: 12,
      css: `d-none d-xl-block`,
    },
  ];

  ngOnInit(): void {
    //   this.screenWidth = window.innerWidth;
    //   this.calculateScale(this.screenWidth);
    for (var product of products) {
      if (product.button_description.length > this.max_length) {
        this.max_length = product.button_description.length;
      }
    }
  }

  // ngOnChanges(): void {
  //   this.scale = window.innerWidth / window.innerHeight;
  // }
  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   this.screenWidth = event.target.innerWidth;
  //   this.calculateScale(this.screenWidth);
  // }

  // // The breakpoints for xs, sm, md, lg and xl are 576px, 768px, 992px and 1200px
  // calculateScale(width: number) {
  //   if (width < 576) {
  //     this.scale = 4;
  //   } else if (width < 768) {
  //     this.scale = 6;
  //   } else if (width < 992) {
  //     this.scale = 8;
  //   } else if (width < 1200) {
  //     this.scale = 10;
  //   }
  // }

  share() {
    window.alert('The product has been shared!');
  }

  getButtonClass(buttonColour: string) {
    switch (buttonColour.toLowerCase()) {
      case 'blue':
        return 'btn btn-primary btn-sm';
      case 'red':
        return 'btn btn-danger btn-sm';
      case 'green':
        return 'btn btn-success';
      case 'yellow':
        return 'btn btn-info';
      default:
        return 'btn btn-dark';
    }
  }

  constructor(
    private elementRef: ElementRef,
    private resizeSvc: ResizeService
  ) {}

  @HostListener('window:resize', [])
  private onResize() {
    this.detectScreenSize();
  }

  ngAfterViewInit() {
    this.detectScreenSize();
  }

  private detectScreenSize() {
    const currentSize = this.sizes.find((x) => {
      const el = this.elementRef.nativeElement.querySelector(
        `.${this.prefix}${x.id}`
      );
      const isVisible = window.getComputedStyle(el).display != 'none';

      return isVisible;
    });

    this.resizeSvc.onResize(currentSize.id);
  }
}
