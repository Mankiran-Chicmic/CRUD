import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private http:HttpClient){
    this.getDataProducts();
  }
  products:any=[]
  getDataProducts(){
    this.http.get('http://localhost:3000/products').subscribe((res:any)=>{
      //console.log(res)
      this.products=res;
    })
  }

  delete(id:any)
  {
    // console.log(id);
    // this.products.splice(id,1);
     this.http.delete(`http://localhost:3000/products/${id}`)
     .subscribe((res)=>{
      console.log(res)
     });
  }
}
