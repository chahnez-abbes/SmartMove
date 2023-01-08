import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/views/services/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['../../.././assets/admin/css/sb-admin-2.min.css','../../../assets/admin/vendor/fontawesome-free/css/all.min.css']
})
export class AdminLayoutComponent implements OnInit{
  ngOnInit(): void {
   console.log(this.asd.LoggedIn())
  }
username: any
constructor( private asd:AuthService){
this.username=localStorage.getItem('username')
console.log(this.username)
}


}
