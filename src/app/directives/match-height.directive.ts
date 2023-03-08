import {
  Directive,
  ElementRef,
  AfterViewChecked,
  Input,
  HostListener,
} from '@angular/core';

import { fromEvent } from 'rxjs';
import { distinctUntilChanged, auditTime, map } from 'rxjs/operators';

@Directive({
  selector: '[myMatchHeight]',
})
export class MatchHeightDirective implements AfterViewChecked {
  // class name to match height
  @Input('myMatchHeight')
  myMatchHeight: string;

  constructor(private el: ElementRef) {
    fromEvent(window, 'resize')
      .pipe(
        auditTime(10000),
        map(() => window.innerWidth),
        distinctUntilChanged()
      )
      .subscribe(() => this.onResize());
  }

  // @HostListener('window:resize')
  onResize() {
    // call our matchHeight function here
    this.matchHeight(this.el.nativeElement, this.myMatchHeight);
    console.log(window.innerWidth);
  }

  ngAfterViewChecked() {
    // call our matchHeight function here later
    this.matchHeight(this.el.nativeElement, this.myMatchHeight);
  }

  matchHeight(parent: HTMLElement, className: string) {
    // match height logic here

    if (!parent) return;

    // step 1: find all the child elements with the selected class name
    const children = parent.getElementsByClassName(className);
    console.log(children);

    if (!children) return;

    // step 1b: reset all children height
    Array.from(children).forEach((x: HTMLElement) => {
      x.style.height = 'initial';
    });

    // step 2a: get all the child elements heights
    const itemHeights = Array.from(children).map(
      (x) => x.getBoundingClientRect().height
    );

    // step 2b: find out the tallest
    const maxHeight = itemHeights.reduce((prev, curr) => {
      return curr > prev ? curr : prev;
    }, 0);

    // step 3: update all the child elements to the tallest height
    Array.from(children).forEach(
      (x: HTMLElement) => (x.style.height = `${maxHeight}px`)
    );
  }
}
