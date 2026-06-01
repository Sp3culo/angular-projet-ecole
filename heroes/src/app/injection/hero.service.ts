import {Injectable, Type} from '@angular/core';

interface IHero {
  index: number;
  name: string;
  hobby : string
}

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  mockHeroList: Array<IHero> = [
    {index : 0, name:"Superman", hobby: "Read"},
    {index : 1, name : "Batman", hobby: "Craft"},
    {index : 2, name : "Spiderman", hobby: "knit"}
  ]
  constructor() { }

  getAllHeroes(): Array<IHero> {
    return this.mockHeroList
  }
}
