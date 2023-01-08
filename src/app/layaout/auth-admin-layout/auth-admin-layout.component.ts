import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/views/services/auth.service';

@Component({
  selector: 'app-auth-admin-layout',
  templateUrl: './auth-admin-layout.component.html',
  styleUrls: ['../../.././assets/admin/css/sb-admin-2.min.css','../../../assets/admin/vendor/fontawesome-free/css/all.min.css']
})
export class AuthAdminLayoutComponent implements OnInit {
 
 datarecived: any
  ngOnInit(): void {
    
  }

constructor(private asd:AuthService,private route:Router){}


loginadmin(f:any){
  let data=f.value

  console.log(data)
this.asd.login(data).subscribe((resp)=>{
 
console.log(resp)
  this.datarecived=resp
 

  this.asd.saveDataProfile(this.datarecived)

let roles = localStorage.getItem("roles")

  if (roles="Admin") {
      this.route.navigate(['/admin/dashboard'])
  } else {
    this.route.navigate(['/'])
  }

},err=>console.log(err))



}


}

