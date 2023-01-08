import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http:HttpClient){

     
  }
Allproducts(){
  return this.http.get('http://localhost:3000/getAllproducts')
}

addproduct(product:any ){
return this.http.post('http://localhost:3000/addproduct',product)
}
  deleteproduct(id:any){
return this.http.delete('http://localhost:3000/product/'+id)
   } 

updateproduct(id:any, newproduct: any){
    return this.http.patch('http://localhost:3000/product/'+id,newproduct)
       } 
getOneproduct(id:any){
        return this.http.get('http://localhost:3000/product/'+id)
           } 
 addreview(id:any, review: any){
  return this.http.patch(`http://localhost:3000/product/${id}/review`,{review:review})
  }       

  }
