import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private http:HttpClient,private router:Router,private userDataService:UserDataService){
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
     this.http.delete(`http://localhost:3000/products/${id}`)
     .subscribe((res)=>{
      console.log(res)
     });
  }
  
  editAndUpdate(id:number,editMode:boolean){   
    let currentList=this.products.find((p:any)=>{return p.id===id})
    editMode=true
    this.userDataService.raiseDataEmitterEvent(currentList,editMode,id);
  }

}
