import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit{
  ngOnInit(): void {
   
  }


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
 msg=""
 productid=""
 i=0
constructor( private data: DataService){
  this.data.Allproducts().subscribe(data=>{
    this.dataArray= data
  console.log(this.dataArray[1])
  })
}


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


  getid(id: string, i: number){
this.productid=id
this.i=i
console.log(this.productid)
  }

delete(){
  this.data.deleteproduct(this.productid).subscribe(data=>{console.log(data)
  this.dataArray.splice(this.i,1)
  })
}


}
