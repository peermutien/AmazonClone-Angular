import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators } from '@angular/forms';
//import { RegistrationService } from './registration.service';
import { Customer } from '../customer';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  customer: Customer =new Customer();
  constructor(private fb : FormBuilder , /*private _registrationService: RegistrationService*/ private signupService: SignupService) { }
  //model
  registrationForm= this.fb.group({
    
    //form fields are inserted
    custName: ['',Validators.required ],
    custEmail:['', Validators.required],
    custAge: ['' , Validators.required],
    custPhoneNo:['', Validators.required],
    custGender: ['' , Validators.required],
    custAddress: ['' , Validators.required],


  });

  ngOnInit(): void {
  }

      get custName() {
        return this.registrationForm.get('custName'); 
      }
      get custEmail() {
        return this.registrationForm.get('custEmail'); 
      }
      get custAge() {
        return this.registrationForm.get('custAge');
      }
      get custPhoneNo() {
        return this.registrationForm.get('custPhoneNo'); 
      }
      get custGender() {
        return this.registrationForm.get('custGender'); 
      }
      get custAddress() {
        return this.registrationForm.get('custAddress');
      }


  // registrationForm = new FormGroup({
  //     userName: new FormControl(''),
  //     password: new FormControl(''),
  //     confirmPassword: new FormControl('')
  // });

  // loadApiData() {
  //   this.registrationForm.patchValue({
  //     custName:'Mutien',
  //     custEmail: 'test',
  //     custAge: 'test',
  //     custPhoneNo: 'test',
  //     custGender: 'test',
  //     custAddress: 'test',
  //   });
  // }

   //customer registration
   addCustomer()
   {
     console.log(this.customer);
     this.signupService.addCustomer(this.customer).subscribe((data:any)=>console.log(data),error=>console.log(error,"Registered"));
     
     alert("Customer Successfully added")
   }

  onSubmit() {

    console.log(this.registrationForm.value);
    // this._registrationService.register(this.registrationForm.value)
    // .subscribe(

    //   response =>console.log('Success'),
    // //  error => console.error('Error',error)
      
    //);
  }
}
