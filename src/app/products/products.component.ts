import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    product:any;
  constructor(private http:HttpClient , private router:Router) { }

  //retrieves product data
  ngOnInit(): void {
   let response = this.http.get("http://localhost:8085/amazon/products/getAllProducts");
   response.subscribe((data)=>this.product=data);
  }

  
  goToCart(product:Product){
    console.log("button clicked");
  this.router.navigate(['cart'],{
    state: {
      product
    }
  });
  }

}
