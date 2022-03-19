import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({//component is an angular decorator
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit { //always export the component so it can be imported anywhere
  selectedHero?: Hero;

  heroes: Hero[] = [];//HEROES;

  constructor(private heroService: HeroService) {//injecting the hero service

  }

  ngOnInit(): void {//lifecycle hook
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()//this works with asynchronous calls
      .subscribe(heroes => this.heroes = heroes)
  }

}
