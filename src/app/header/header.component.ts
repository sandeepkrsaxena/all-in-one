import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loginMode: boolean = true;
  
  subjetText: any = "";

  cartItems: number = 0;

  constructor(private authService: UsersService, private productService: ProductService) { }

  ngOnInit(): void {
    this.authService.userSubject.subscribe(
      (res) => {
        this.loginMode = false
      },
      (error) => {
        this.loginMode = true;
      }
    )

    this.productService.getProductList().subscribe(
      res => {
        this.cartItems = res.length;
      }
    )
    
  }

}
