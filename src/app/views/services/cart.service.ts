import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor( private http:HttpClient){

     
  }
cart(){
  return this.http.get('http://localhost:3000/getcart')
}

addcart(product:any ){
return this.http.post('http://localhost:3000/addcart',product)
}
  deletecart(id:any){
return this.http.delete('http://localhost:3000/cart/'+id)
   } 

updatecart(id:any, amount: any){
    return this.http.patch('http://localhost:3000/cart/'+id,{amount})
       } 
clear(){
        return this.http.delete('http://localhost:3000/clear')
           }        
}
