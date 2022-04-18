import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  endpoint='';
  constructor(private http:HttpClient) {
    this.endpoint=`${environment.api}/ambassadors`;
   }
  all():Observable<User[]>{
    return this.http.get<User[]>(this.endpoint)
  }
}
