import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-button1',
  templateUrl: './button1.component.html',
  styleUrls: ['./button1.component.css'],
})
export class Button1Component implements OnInit, AfterViewInit {
  products = products;

  constructor() {}

  ngAfterViewInit() {
    var width = this.myIdentifier.nativeElement.offsetWidth;
    var height = this.myIdentifier.nativeElement.offsetHeight;

    console.log('Width:' + width);
    console.log('Height: ' + height);
  }

  ngOnInit(){

  }

  @ViewChild('myIdentifier', {static: false})
  myIdentifier: ElementRef;

  share() {
    window.alert('The product has been shared!');
  }
}
