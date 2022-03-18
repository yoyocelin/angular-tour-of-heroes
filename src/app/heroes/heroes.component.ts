import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({//component is an angular decorator
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit { //always export the component so it can be imported anywhere
  selectedHero?: Hero;

  heroes = HEROES;

  constructor() {
  }

  ngOnInit(): void {//lifecycle hook
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
