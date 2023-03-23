import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { UserDataService } from '../user-data.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
 
  constructor(private http:HttpClient,private router:Router,private userData:UserDataService){
    // this.userData.dataEmitter.subscribe((res)=>{
    //   console.log(res)
    // })
  }
  productForm=new FormGroup({
    id:new FormControl('',[Validators.required]),
    name:new FormControl('',[Validators.required]),
    price:new FormControl('',[Validators.required]),
    product:new FormControl('',[Validators.required]),
  })
  @Input() dataProducts=new EventEmitter<{form:FormGroup}>
  showErrors=false;
  postProducts(eventdata:any){
    console.log(eventdata)
    if(this.productForm.valid){
       this.http.post('http://localhost:3000/products',eventdata).subscribe((res:any)=>{
          console.log(res)
       })
    }else{
      this.showErrors=true
    }
    this.router.navigate(['home'])
  }

  get id(){
    return this.productForm.get('id')
  }
  get name(){
    return this.productForm.get('name')
  }
  get price(){
    return this.productForm.get('price')
  }
  get product(){
    return this.productForm.get('product')
  }
  
}
