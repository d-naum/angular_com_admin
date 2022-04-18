import { Component, OnInit } from '@angular/core';
import { Emitters } from 'src/app/emitters/emitters';
import { User } from 'src/app/interface/user.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  user:User | undefined;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(user=>{
      this.user=user
    })
  }
  logout():void{
    this.authService.logout().subscribe(res=>{
      console.log(res)
    })
  }
}
