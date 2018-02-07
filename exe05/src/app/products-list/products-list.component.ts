import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @Input() productList: Product[];
  @Output() onSelectProduct: EventEmitter<Product>;
  constructor() {
    this.onSelectProduct = new EventEmitter();
  }

  selectProduct(product) {
    this.onSelectProduct.emit(product);
    // console.log('product-list', product);
  }
  ngOnInit() {}
}
