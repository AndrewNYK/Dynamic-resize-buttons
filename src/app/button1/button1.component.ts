import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-button1',
  templateUrl: './button1.component.html',
  styleUrls: ['./button1.component.css'],
})
export class Button1Component implements OnInit, AfterViewInit {
  products = products;

  // private max_height: number;

  // private button_array: Array<ElementRef>;
  // private size_array: Array<number>;

  // @ViewChildren('myIdentifier') Identifier: QueryList<ElementRef>;

  constructor() {}

  ngAfterViewInit() {
    // this.Identifier.forEach((button) =>
    //   console.log(button.nativeElement.offsetHeight)
    // );
    // console.log(this.Identifier.toArray());
    // for (const element of this.Identifier.toArray()) {
    //   this.size_array.push(element.nativeElement.offsetHeight);
    // }
    // console.log(this.size_array);
    // this.max_height = Math.max(...this.size_array);
    // console.log('MaxHeight: ' + this.max_height);
    // this.Identifier.forEach((button) => {
    //   if (this.max_height < button.nativeElement.offsetHeight) {
    //     this.max_height = button.nativeElement.offsetHeight;
    //   }
    // });
  }

  ngOnInit() {
    // this.size_array = [];
    // this.max_height = 0;
  }

  share() {
    window.alert('The product has been shared!');
  }
}
