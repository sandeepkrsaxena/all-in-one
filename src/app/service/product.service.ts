import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   
  productListAPI = "https://fakestoreapi.com/products";
  cartListItems: any = [];
  productList = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) { }

  // getProducts(id?: any){
  //   let loadDetails: any = {};
  //   if(id){
  //    loadDetails['id'] = id;
  //   }
  //  return this.http.get(this.productListAPI, {
  //    params: loadDetails
  //  });
  // }


  getProducts(id?: any){
    let loadDetails: any = {};
    if(id){
     loadDetails['id'] = id;
    }
   return this.http.get(this.productListAPI, {
     params: loadDetails
   });
  }

  getProductList(){
    return this.productList.asObservable();
  }

  setProduct(productItem: any){
    this.cartListItems.push(...productItem);
    this.productList.next(productItem); 
  }

  addToCart(productItem: any){
    this.cartListItems.push(productItem);
    this.productList.next(this.cartListItems); 
    this.getTotalPrice();

  }

  getTotalPrice(){
    let total = 0;
    this.cartListItems.map((a:any) => {
      total += a.total;
    })

  }

  removeCartItem(product: any){
    this.cartListItems.map((a: any, index: any) => {
      if(product.id === a.id){
        this.cartListItems.splice(index, 1);
      }
    })
    this.productList.next(this.cartListItems);
  }

  removeAllItems(){
    this.cartListItems = [];
    this.productList.next(this.cartListItems);
  }

}
