import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private http:HttpClient,private router:Router){}
  productForm=new FormGroup({
    id:new FormControl('',[Validators.required]),
    name:new FormControl('',[Validators.required]),
    price:new FormControl('',[Validators.required]),
    product:new FormControl('',[Validators.required]),
  })

  showErrors=false;
  postProducts(data:any){
    console.log(data)
    if(this.productForm.valid){
       this.http.post('http://localhost:3000/products',data).subscribe((res:any)=>{
          console.log(res)
       })
    }else{
      this.showErrors=true
    }
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
  goToHome(){
    this.router.navigate(['home']);
  }
}
