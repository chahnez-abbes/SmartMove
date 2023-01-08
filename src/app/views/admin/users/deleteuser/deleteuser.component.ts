import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/views/services/users.service';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit{
  ngOnInit(): void {
   
  }


  dataArray:any
  searchTerm!: any;
datauser={
  fname:'',
  interest:'',
  adress:'',
  roles:'',
  email:'',
   _id:'' ,
    image:'',
     bio: ''
 }
 msg=""
 userid=""
 i=0
constructor( private data: UsersService){
  this.data.Allusers().subscribe(data=>{
    this.dataArray= data
  console.log(this.dataArray[1])
  })
}


getdata(fname:string,interest:string,adress:string,roles:string, email:string, _id:string , image:string){
  this.msg=""

    this.datauser._id=_id
    this.datauser.fname=fname
    this.datauser.adress=adress
    this.datauser.roles=roles
    this.datauser.email=email
    this.datauser.bio=image
    this.datauser.interest=interest

  console.log(_id)
  
  }


  getid(id: string, i: number){
this.userid=id
this.i=i
console.log(this.userid)
  }

delete(){
  this.data.deleteuser(this.userid).subscribe(data=>{console.log(data)
  this.dataArray.splice(this.i,1)
  })
}


}
