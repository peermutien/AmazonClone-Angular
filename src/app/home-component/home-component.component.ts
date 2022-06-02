import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators } from '@angular/forms';
import { Login } from '../login';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

    login: Login =new Login();
    
  constructor(private fb : FormBuilder , private loginService: LoginService , private router:Router ,  /*private _registrationService: RegistrationService*/ ) { }

  //model
  registrationForm= this.fb.group({
    
    //form fields are inserted
    userName: ['',Validators.required ],
    passWord:['', Validators.required],
  });

  ngOnInit(): void {
  }

  get userName() {
    return this.registrationForm.get('userName'); 
  }
  get passWord() {
    return this.registrationForm.get('passWord'); 
  }

  onSubmit() {

    console.log(this.registrationForm.value);

  }

  //token generation
  addUser()
  {
    console.log(this.login);
    this.loginService.addUser(this.login).subscribe(
      (data:any)=>console.log(data)
      //localStorage.setItem('data')
      );
    
    
    //console.log(this.registrationForm.value, "texthjhbhj");
    // this.loginService.addUser(this.registrationForm.value).subscribe((data:any)=>console.log(data),error=>console.log(error,"Error"));
    //console.log("home component")
  }

  //user registration
  regUser()
  {
    console.log(this.login);
    this.loginService.regUser(this.login).subscribe((data:any)=>console.log(data),error=>console.log(error,"Registered"));
    alert("User Registered. Click on Profile button below to add information")
  }

  goToProfile(){
    console.log("button clicked");
  this.router.navigate(['signup']);
  }

}
