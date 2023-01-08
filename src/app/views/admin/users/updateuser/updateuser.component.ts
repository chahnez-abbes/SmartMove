import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';
import { UsersService } from 'src/app/views/services/users.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent  implements OnInit{


  dataArray:any
  searchTerm!: any;
  datauser={
    fname: '', 
    email: '', 
    bio: '',
    interest: '',
    phone: '',
    id:'',
    image:'',
    roles :'',
    password:'',
    _id:'',
    adress:''
     }
     msg=""

  ngOnInit(): void {
   
  }
constructor( private data: UsersService){
  this.data.Allusers().subscribe(data=>{
    this.dataArray= data
  console.log(this.dataArray[1])
  })

}

getdata(fname:string,interest:string,adress:string,roles:string, email:string, _id:string , image:string, bio: string, password:string,phone:string){
  this.msg=""

    this.datauser._id=_id
    this.datauser.fname=fname
    this.datauser.adress=adress
    this.datauser.roles=roles
    this.datauser.email=email
    this.datauser.image=image
    this.datauser.interest=interest
    this.datauser.bio=bio
    this.datauser.password=password,
    this.datauser.phone=phone

  console.log(_id)
  
  }
  update(f: any){
  
    let data= f.value
    console.log(data)
    console.log(this.datauser._id)
    this.data.updateuser(this.datauser._id, data).subscribe(response=>{
      let indexId=this.dataArray.findIndex((obj:any)=>obj._id==this.datauser._id)
      console.log(this.dataArray[indexId])
      this.dataArray[indexId]=data 
  
  this.msg="product updated succeffully"
  
    },(err:HttpErrorResponse)=>console.log(err.message))
  
  }

}
