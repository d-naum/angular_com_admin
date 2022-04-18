import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../interface/order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  endpoint=`${environment.api}/orders`
  constructor(
    private http:HttpClient
  ) { }
  all():Observable<Order[]>{
    return this.http.get<Order[]>(this.endpoint)
  }
}
