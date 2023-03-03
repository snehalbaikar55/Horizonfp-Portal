import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-pages-banner',
  templateUrl: './sub-pages-banner.component.html',
  styleUrls: ['./sub-pages-banner.component.css']
})
export class SubPagesBannerComponent implements OnInit {
  pagename:any;
  constructor() { }

  ngOnInit(): void {
    this.pagename="aaa";
  }

}
