import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrproductsService {

  constructor(private http:HttpClient) { }
  url='http://localhost:3000/products';

  productsGet(){
   return this.http.get(this.url);
  }
}
