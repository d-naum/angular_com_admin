import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  endpoint=`${environment.api}/products`
  constructor(
    private http:HttpClient
  ) { }
  all():Observable<Product[]>{
    return this.http.get<Product[]>(this.endpoint)
  }
  create(data:any):Observable<Product[]>{
    return this.http.post<Product[]>(this.endpoint,data)
  }
  get(id:number):Observable<Product>{
    return this.http.get<Product>(`${this.endpoint}/${id}`)
  }
  update(id:number, data:any):Observable<Product>{
    return this.http.put<Product>(`${this.endpoint}/${id}`,data)
  }
  delete(id:number):Observable<void>{
    return this.http.delete<void>(`${this.endpoint}/${id}`)
  }
}
