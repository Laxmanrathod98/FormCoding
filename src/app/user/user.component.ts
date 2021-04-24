import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl ,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }
  myReactiveForm:any=new FormGroup({
    name1:new FormControl('',Validators.required),
    name2:new FormControl('',Validators.required),
    phone:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    address:new FormControl('',Validators.required)
  });
  ngOnInit(): void {
  }
  collectData(){
    console.log(this.myReactiveForm.value);
  }
  get  name1(){
    return this.myReactiveForm.get('name1')
  }
  get  name2(){
    return this.myReactiveForm.get('name2')
  }
  get  phone(){
    return this.myReactiveForm.get('phone')
  }
  get  email(){
    return this.myReactiveForm.get('email')
  }
  
}
