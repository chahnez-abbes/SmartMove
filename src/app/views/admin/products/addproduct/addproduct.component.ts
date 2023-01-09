import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  ngOnInit(): void {
  
  }
constructor(private data: DataService, private route: Router){

}
msg=""
add(f:any){
let data=f.value
let data2={
  productname: data.productname,
  price: data.price,
  qte: data.qte,
  condition: data.condition,
  about: data.about, 
  image:data.image,
  category: data.category, 
  user: localStorage.getItem('name'),
  uid:localStorage.getItem('id')
}

this.data.addproduct(data2).subscribe(response=>{
  console.log(response)
  this.route.navigate(['/admin/allproducts'])
},(err: HttpErrorResponse)=>{
 console.error(err.error)
//  to change 
 this.msg="verifier votre formulaire"
})

}
}
