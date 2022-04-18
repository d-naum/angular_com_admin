import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/interface/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit,AfterViewInit {
  columns=['ID', 'name', 'email', 'actions'];
  dataSource=new MatTableDataSource();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  constructor(
    private userService:UsersService
  ) { }

  ngOnInit(): void {
    this.userService.all().subscribe(users=>{
      this.dataSource.data=users
    })
  }
  ngAfterViewInit(): void {
      this.dataSource.paginator=this.paginator
  }

}
