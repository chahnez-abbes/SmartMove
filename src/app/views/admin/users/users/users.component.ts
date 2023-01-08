import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/views/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['../../../../../assets/admin/vendor/datatables/dataTables.bootstrap4.min.css']
})
export class UsersComponent implements OnInit {
  dataArray:any
  constructor(private data:UsersService){
    this.data.Allusers().subscribe(data=>{
      this.dataArray= data
    console.log(this.dataArray[1])
    })
  }
  
  
  ngOnInit(): void {
    
  }

}
