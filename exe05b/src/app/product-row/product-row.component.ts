import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from '../product.model';
// import { Output } from '@angular/core/src/metadata/directives';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.scss']
})
export class ProductRowComponent implements OnInit {
  @Input() product: Product;

  @HostBinding('attr.class') cssClass = 'item';
  constructor(private productService: ProductService) {}
  selectItem(product: Product) {
    this.productService.deleteProduct(product);
  }
  ngOnInit() {}
}
