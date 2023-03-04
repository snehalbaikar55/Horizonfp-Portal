import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  Contactform!: FormGroup;
  isSubmitted:any;
  name: any;
  email: any;
  mobile: any;
  emaildata: any;
  constructor( private fb: FormBuilder,private dataservice:DataService) { }
  

  ngOnInit(): void {
    this.Contactform= this.fb.group({  
      name: ['',[Validators.required]],  
      email: ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],  
      mobile: ['',[Validators.required, Validators.maxLength(10)]],  
      
    });  
    
  }
  submitForm(){
    // alert("hi")
    this.isSubmitted=false;
    if (this.Contactform.invalid) {  
      return  
    }  
    //console.log("Name :- "+this.form['name'].value)  
    //console.log("Email :- "+this.form['email'].value)  
    //console.log("Mobile :- "+this.form['mobile'].value)  
    this.dataservice.emaildataSer(this.Contactform.getRawValue()).subscribe(res=>{
      this.isSubmitted  = res;
    })
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.Contactform.getRawValue()));
  }
  get form() {  
    return this.Contactform.controls;  
  }  

}
