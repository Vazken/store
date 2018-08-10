import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public product: Product = new Product();
  constructor(
    private route: ActivatedRoute,
    private service: ProductService
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  private getProduct() {
    this.service.getProduct(this.route.snapshot.paramMap.get('id')).subscribe(
      res => {
        this.product = res;
      },
      err => {

      }
    );
  }

}
