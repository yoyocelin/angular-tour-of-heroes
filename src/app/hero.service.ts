import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({//to indicate that this service is going to provide an injectable service
  providedIn: 'root'//registering. When registered in the root, it can be injected anywhere
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {//to observe asynchronous calls 
    const heroes = of(HEROES); //of(HEROES) returns an Observable<Hero[]>, emits an array of heroes from the body of the HTTP response
    return heroes;
  }
}
