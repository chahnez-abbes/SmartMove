import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/views/services/cart.service';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   somme!: number

  dataArray!: any;
  msg!: string;
  constructor( private route:ActivatedRoute, private cart: CartService, private data: DataService){

this.cart.cart().subscribe(data=>{
  this.dataArray= data
  this.somme=this.calcsomme(this.dataArray)
  console.log(this.somme)

})

  }


  ngOnInit(): void {
    
  }

calcsomme( data: any[]): number{
  
  let somme=0
  for (let i = 0; i < data.length; i++) {
  
    somme=somme+(data[i].price*data[i].amount)
    
  }
  console.log(somme)
  return somme
}  


inc(id: any, amount: any){
  amount=amount+1
  this.cart.updatecart(id, amount).subscribe(response=>{
  
this.reload()


  },(err:HttpErrorResponse)=>console.log(err.message))
}
desc(id: any, amount: any){
  amount=amount-1
  this.cart.updatecart(id, amount).subscribe(response=>{
  
this.reload()


  },(err:HttpErrorResponse)=>console.log(err.message))
}
reload() {
  window.location.reload();
}

delete(id: any, i: number){
  this.cart.deletecart(id).subscribe(data=>{console.log(data)
  this.dataArray.splice(i,1)
  })
}
clear(){
this.cart.clear().subscribe(resp=>{console.log(resp)
this.dataArray=[]
this.somme=0
})
}


checkout(){
let user = localStorage.getItem('id')
let command 
console.log(this.dataArray)
  for (let i = 0; i < this.dataArray.length; i++) {
    
    command={
    productid: this.dataArray[i].productid,
    image: this.dataArray[i].image,
    price: this.dataArray[i].price,
    productname: this.dataArray[i].productname,
    amount: this.dataArray[i].amount,
    seller: this.dataArray[i].seller,
    user: user,
   
    }
    console.log(command)
    this.data.getOneproduct(this.dataArray[i].productid).subscribe(resp=>{
      // console.log(resp)
    })
   
  }





}

}
