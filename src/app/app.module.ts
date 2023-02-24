import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ResizeService } from './services/resize.services';
import { SizeDetectorComponent } from './size-detector/size-detector.component';
import { DropdownMenu1Component } from './dropdown-menu-1/dropdown-menu-1.component';
import { DropdownMultiLevelComponent } from './dropdown-multi-level/dropdown-multi-level.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([{ path: '', component: ProductListComponent }]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    SizeDetectorComponent,
    DropdownMenu1Component,
    DropdownMultiLevelComponent,
  ],
  bootstrap: [AppComponent],
  providers: [ResizeService],
})
export class AppModule {}
