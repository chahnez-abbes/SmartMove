import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/views/services/cart.service';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  dataArray:any
  searchTerm!: any;
  msg!: string;
 
  constructor( private data: DataService , private route: Router, private cart: CartService){
    
    this.data.Allproducts().subscribe(data=>{
      this.dataArray= data
    console.log(this.dataArray[1])
    })
      
    }
  ngOnInit(): void {
  
  }
details(id: string){
  console.log(id)
  this.route.navigate(['/details/'+id])
}
addtocart(productname: string, price:number , qte: number, _id:string){
 
  let data2={
    productname: productname,
    price: price,
    amount: qte,
    productid: _id
  
  }
  this.cart.addcart(data2).subscribe(resp=>{
    console.log("add")
    this.msg="product added"
  },(err: HttpErrorResponse)=>{
    console.error(err.error)}
    
    )
  

}

addtofav(productId: string, image: string,price: number, productname: string, user: string, uid:string){
  
  let  favorit=
    {
      productId: productId,
      image: image,
      price: price,
      productname: productname,
      uid: uid,
      user: user
    }
  
  let id= localStorage.getItem('id')
  console.log(id)
console.log(favorit)  
  
  this.data.addtofav(id,favorit).subscribe(resp=>{
    console.log("add")
    this.msg="product added"
  },(err: HttpErrorResponse)=>{
    console.error(err.error)}
    
    )
  

}

}

 





