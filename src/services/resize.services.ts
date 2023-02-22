import { Injectable } from '@angular/core';
import { SCREEN_SIZE } from './screen-size.enum';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class ResizeService {
  //Create Observable using Subject as Source using .asObservable()
  //Operators are used to transform data from the Observable
  //DistinctUntilChanged() operator that only outputs dinstinct values according to previous value
  //output !== previous output
  get onResize$(): Observable<SCREEN_SIZE> {
    return this.resizeSubject.asObservable().pipe(distinctUntilChanged());
  }

  private resizeSubject: Subject<SCREEN_SIZE>;

  constructor() {
    this.resizeSubject = new Subject();
  }

  //subscription of observable (Handling Data)
  onResize(size: SCREEN_SIZE) {
    this.resizeSubject.next(size);
  }
}
