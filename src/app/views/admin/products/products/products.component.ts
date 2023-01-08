import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';
import{ Observable } from 'rxjs'
import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['../../../../../assets/admin/vendor/datatables/dataTables.bootstrap4.min.css']
})
export class ProductsComponent implements OnInit{

  dataArray:any

 


  constructor( private data: DataService){
    
this.data.Allproducts().subscribe(data=>{
  this.dataArray= data
console.log(this.dataArray[1])
})
  
}

  ngOnInit(): void {
 
  }




}
