import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any = [];

  constructor(private productListService: ProductService) { }

  ngOnInit(): void {
    this.productListService.getProducts().subscribe(
      res => {
        this.products = res;
      }
    )
  }

  addProduct(addToItems: any){
    this.productListService.addToCart(addToItems);
    console.log(addToItems)
    


  }

  


}
