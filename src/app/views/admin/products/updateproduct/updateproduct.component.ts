import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  dataArray:any
  searchTerm!: any;
dataproduct={
productname: '', 
price: 0, 
user: '',
condition: '',
category: '',
qte: 0,
id:'',
image:'',
about:''
 }


  constructor( private data: DataService){
    
this.data.Allproducts().subscribe(data=>{
  this.dataArray= data
console.log(this.dataArray[1])
})
  
}

  ngOnInit(): void {
 
  }

msg=""
  getdata(productname: string, price: number, user: string, condition: string, category: string, qte: number, _id:string , image:string, about: string){
this.msg=""
this.dataproduct.price =price
this.dataproduct.productname=productname
this.dataproduct.user=user
this.dataproduct.condition=condition
this.dataproduct.category=category
this.dataproduct.qte=qte
this.dataproduct.id=_id
this.dataproduct.image=image
this.dataproduct.about=about
  
console.log(_id)

}


update(f: any){
  
  let data= f.value
  console.log(data)
  console.log(this.dataproduct.id)
  this.data.updateproduct(this.dataproduct.id, data).subscribe(response=>{
    let indexId=this.dataArray.findIndex((obj:any)=>obj._id==this.dataproduct.id)
    console.log(this.dataArray[indexId])
    this.dataArray[indexId]=data 

this.msg="product updated succeffully"

  },(err:HttpErrorResponse)=>console.log(err.message))

}






}
