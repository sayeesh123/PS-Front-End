import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { apiString } from 'src/app/Services/apiString';
import { Services } from 'src/app/Services/services';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  loginDetails:any;
  link:any = true

  constructor( 
    private fb : FormBuilder,
    private apiMethode: Services,
    private apiString: apiString, ) { }

  ngOnInit(): void {
    this.loginDetails = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }
  
  submit(){
  
    console.log(this.loginDetails.value)
    if(this.loginDetails.status == 'VALID'){
      console.log(this.loginDetails.value)
      this.apiMethode.post_request( this.apiString.LoginPage.login,this.loginDetails.value).subscribe(result =>{
        console.log(result)
      })
      this.apiMethode.popupMessage('success','Login Successfully')
    }
    // this.loginDetails.controls['email'].setErrors(null);
    // this.apiMethode.popupMessage('error','Login Failed')
    this.apiMethode.popupMessage('error','Invalid Details')
  }
  mylink(){
    this.link=false
  }

}
