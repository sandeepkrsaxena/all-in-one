import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  userID: any = "";
  uniqueUser: any = [];
  constructor(private activatedroute: ActivatedRoute, private productservice: ProductService) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(
      (params) => {
        this.userID += params.get('id');
        this.loadUniqueFunc(this.userID)
      }
    )
  }

  loadUniqueFunc(userID: any){
    this.productservice.getProducts(userID).subscribe(
      (res: any) => {
        this.uniqueUser = res[0];
        console.log(res)
      })
  }

}

