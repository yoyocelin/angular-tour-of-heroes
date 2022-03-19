import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({//to indicate that this service is going to provide an injectable service
  providedIn: 'root'//registering. When registered in the root, it can be injected anywhere
})
export class HeroService {

  constructor(private messageService: MessageService ) { }//service-in-service scenario

  getHeroes(): Observable<Hero[]> {//to observe asynchronous calls 
    const heroes = of(HEROES); //of(HEROES) returns an Observable<Hero[]>, emits an array of heroes from the body of the HTTP response
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
