import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'demo-seo';
  navigation = [
    {
      title: 'Country Home',
      href: '/country-home'
    },
    {
      title: 'Country Details',
      href: '/country-details'
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: object, private router: Router) {

  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
    }
  }

  change(link){
    this.router.navigate([link]);
  }
}
