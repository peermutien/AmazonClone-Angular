import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productData:any
  productName:any
  productPrice:any
  productDescription:any
  productId:any
  productUUID:any
  productRating:any

  constructor(private router:Router) {
    this.productData = this.router.getCurrentNavigation()?.extras.state;

    console.log(this.productData, "using navigation");

//     id: "6278d914a20ddd02d7454340"
// prodDescription: "Iphone 13 from Apple "
// prodName: "iphone"
// prodPrice: 75000
// prodRating: 4.8
// productID: "16630a20-45b5-49ba-a1cd-c040fa09bfa1"



    this.productName = this.productData.product.prodName;

    this.productPrice = this.productData.product.prodPrice;

    this.productId = this.productData.product.id;
    
    this.productDescription = this.productData.product.prodDescription;

    this.productUUID = this.productData.product.productID;

    this.productRating = this.productData.product.prodRating;
    


   }

  ngOnInit(): void {
  }

  pay()
  {
    alert("Payment Successful")
    console.log("Payment Successful")
  }

}
