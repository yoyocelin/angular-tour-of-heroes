import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({//component is an angular decorator
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit { //always export the component so it can be imported anywhere
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  constructor() {
  }

  ngOnInit(): void {//lifecycle hook
  }

}
