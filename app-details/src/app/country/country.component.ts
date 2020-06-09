import { Component, OnInit } from '@angular/core';
import { DemoService } from '../service/demo.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  providers: [
    DemoService
  ]
})
export class CountryComponent implements OnInit {

  countryList: Array<any>;

  constructor(private demoService: DemoService) { }

  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi'
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  ngOnInit(): void {
    this.demoService.getAllCountry().subscribe((resp: Array<any>) => {
      this.countryList = resp;
    });
  }
}
