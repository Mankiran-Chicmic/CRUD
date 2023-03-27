import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';
import { productsArray } from 'src/productsArray';
import { PrproductsService } from '../services/prproducts.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  constructor(private http:HttpClient,private router:Router,private userDataService:UserDataService,private productService:PrproductsService){}
  @Input()products:any=[]
  @Output()changed:EventEmitter<boolean>=new EventEmitter();
  getDataProducts(){
    return this.productService.productsGet().subscribe((res:any)=>{
      this.products=res
     })
  }
 
  delete(id:any)
  {
     this.http.delete(`http://localhost:3000/products/${id}`)
     .subscribe((res)=>{
      console.log(res)
     });
     this.getDataProducts()
  }
  
  editAndUpdate(id:number,editMode:boolean){   
    let currentList=this.products.find((p:any)=>{return p.id===id})
    editMode=true
    this.userDataService.raiseDataEmitterEvent(currentList,editMode,id);
  }

}
