import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //declare variables
  loginForm:FormGroup;
  isSubmitted=false;
  error:string='';


  constructor(private formBuilder:FormBuilder,private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
     //create a reactive form model
     this.loginForm=this.formBuilder.group({
      //this.loginForm is a property that will hold the formData and validationStatus.
      //this.formBuilder is an instance of the formBuilderclass which is created by angular,used to simplify the creation of reactive forms.
      //FormControlName fields
      UserName:['',[Validators.required]],
      Password:['',[Validators.required]]
    });
  }

  //get all controls for validation
  get formControls(){
    return this.loginForm.controls;
  }

  loginCredentials(){
    console.log(this.loginForm.value);
    this.isSubmitted =true;
    console.log("Submitted form for credentials");
     
    //form is invalid
     if(this.loginForm.invalid){
      this.error="Sorry! Invalid Entry. Try Again";
    }

    //form is valid
    if(this.loginForm.valid){
      console.log("Submitted with valid");

      //calling method from AuthService --Authentication and authorize
      this.authService.loginVerify(this.loginForm.value).subscribe(
        response =>{
          this.error ='';
          console.log(response);
          //set SessionStorage and localStorage(browser->inspect->Application)
          //SessionStorage - changes browser to browser
          sessionStorage.setItem('USERNAME', response.uName);
          sessionStorage.setItem('ACCESS_ROLE', response.rId.toString());

          //localStorage - same for all browsers
          localStorage.setItem('USERNAME', response.uName);
          localStorage.setItem('ACCESS_ROLE', response.rId.toString());

          
          if(response==null){
            this.error ="Invalid username and/or password";
          }

          else if(response.rId ==1){
            this.router.navigateByUrl('ListEmployee');
            console.log('Admin')
          }

          else if(response.rId == 2){
            this.router.navigateByUrl('receptionist');
            console.log('Receptionist');
          }

          else{
            this.error="Sorry! You are not allowed to access the system"
          }
        },
        error=>{
        console.log(error);
        this.error="Invalid Username or Password! Please Try Again..."
        }
      );
    }
  }
  }


