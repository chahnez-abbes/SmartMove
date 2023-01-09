import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/views/services/auth.service';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {
 
  datarecived: any
 
  ngOnInit(): void {
   
  }
constructor(private asd:AuthService,private route:Router){

}


login(f:any){
  let data=f.value

  console.log(data)
this.asd.login(data).subscribe((resp)=>{
 
console.log(resp)
  this.datarecived=resp
 

  this.asd.saveDataProfile(this.datarecived)

let roles = localStorage.getItem("roles")
console.log(roles)
 

},err=>console.log(err))



}



}
