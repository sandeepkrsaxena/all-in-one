import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  productCartList: any = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductList().subscribe(
      res => {
        this.productCartList = res;
      }
    )
  }

  deteleItem(item: any){
    this.productService.removeCartItem(item);
  }

  removeAllItems(){
    this.productService.removeAllItems();
  }

}
