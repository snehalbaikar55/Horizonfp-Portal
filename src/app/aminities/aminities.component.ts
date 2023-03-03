import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aminities',
  templateUrl: './aminities.component.html',
  styleUrls: ['./aminities.component.css']
})
export class AminitiesComponent implements OnInit {

  amenitiesArray:any=[]
  facilitiesArray:any=[]

  constructor() { }

  ngOnInit(): void {
    this.amenitiesArray=[
      {img:'assets/amenities/tea.PNG',title:'Banquet Hall'},
      {img:'assets/amenities/clubh.PNG',title:'Club House'},
      {img:'assets/amenities/sportsc.PNG',title:'Sports Courts'},
      {img:'assets/amenities/kidspa.PNG',title:'Kids Play Area'},
      {img:'assets/amenities/swimingp.PNG',title:'Swimming Pool'},
      {img:'assets/amenities/fitness.PNG',title:'Fitness Corner'},
      {img:'assets/amenities/gym.PNG',title:'Gym'},
      {img:'assets/amenities/partylawn.PNG',title:'Party Lawn'},
      {img:'assets/amenities/library.PNG',title:'Library'},
    ]

    this.facilitiesArray=[
      {img:'assets/facilities/intercom.PNG',title:'Intercom'},
      {img:'assets/facilities/lift.PNG',title:'Lift'},
      {img:'assets/facilities/gaspipe.PNG',title:'Gas Pipeline'},
      {img:'assets/facilities/powerb.PNG',title:'Power Back Up'},
      {img:'assets/facilities/parking.PNG',title:'Parking'},
      {img:'assets/facilities/securitys.PNG',title:'Security System'},
    ]
  }

}
