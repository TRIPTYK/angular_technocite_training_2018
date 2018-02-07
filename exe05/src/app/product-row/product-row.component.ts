import {
  Component,
  OnInit,
  Input,
  HostBinding,
  Output,
  EventEmitter
} from '@angular/core';
import { Product } from '../product.model';
// import { Output } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.scss']
})
export class ProductRowComponent implements OnInit {
  @Input() product: Product;
  @Output() onSelectedProduct: EventEmitter<Product>;
  @HostBinding('attr.class') cssClass = 'item';
  constructor() {
    this.onSelectedProduct = new EventEmitter();
  }
  selectItem(product: Product) {
    // console.log('Product Row', product);
    this.onSelectedProduct.emit(product);
  }
  ngOnInit() {}
}
