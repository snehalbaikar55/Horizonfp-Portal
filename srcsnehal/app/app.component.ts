import { Component } from '@angular/core';
import * as $ from 'jquery';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'horizonfp_angular';
  ngOnInit(): void {
    AOS.init();
  }
  
}
