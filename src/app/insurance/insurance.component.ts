import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {

  insurance:any=[]
  
  constructor() { }

  ngOnInit(): void {
    this.insurance=[
      {title:'LIFE INSURANCE',description:'Life insurance policy provides you assurance that your family will get financial security and support even when you are not around.',btn:"Read More"},
      {title:'HEALTH INSURANCE',description:'A type of insurance coverage that pays for medical and surgical expenses that are incurred by the insured.',btn:"Read More"},
      {title:'MOTOR INSURANCE',description:'A standard motor insurance or better known as a car insurance policy is usually the insurance coverage mandated by law to drive on the road.',btn:"Read More"},
      {title:'HOME INSURANCE',description:'Property insurance provides protection against most risks to property,such as fire, theft and some weather damage.',btn:"Read More"},
  
    ] 
  }

}
