import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products: Product[] = [];
  constructor(private service: ProductService) { }

  ngOnInit() {
    this.service.getProducts().subscribe(
      res => {
        this.products = res;
      },
      err => {

      }
    );
  }

}
