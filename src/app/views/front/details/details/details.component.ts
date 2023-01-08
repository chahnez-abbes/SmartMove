import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { response } from 'express';
import { CartService } from 'src/app/views/services/cart.service';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers:[DatePipe]
})
export class DetailsComponent implements OnInit{
  ngOnInit(): void {
    
  }
  id: any
  product:any
  msg=""
  
review: any
  constructor( private route:ActivatedRoute, private data:DataService,private router: Router, private cart: CartService){
     this.id = this.route.snapshot.paramMap.get('id')
  console.log(this.id)
this.data.getOneproduct(this.id).subscribe(resp=>{this.product=resp
this.review=this.product.review
console.log(this.review)
},(err)=>{ this.msg=err.message})
  }


  reload() {
    window.location.reload();
  }
  
addreview(f: any){
let d=f.value
let data2={
  comment:d.comment,
  range:d.range,
  date: new Date(),
  user:d.user,
  image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png',
  uid:'63acf326d6c442acd2029569'
}
  
  
console.log(data2)
this.data.addreview(this.id, data2).subscribe(resp=>{
  console.log(data2)
  console.log(resp)
this.reload()

this.msg="product updated succeffully"

},(err:HttpErrorResponse)=>console.log(err.error))


}

addtocart(){
 
  let data2={
    productname: this.product.productname,
    price: this.product.price,
    amount: this.product.qte,
    productid:this.product._id
  
  }



  this.cart.addcart(data2).subscribe(resp=>{
    console.log("add")
    this.msg="product added"
  },(err: HttpErrorResponse)=>{
    console.error(err.error)}
    
    )
  

}
}
