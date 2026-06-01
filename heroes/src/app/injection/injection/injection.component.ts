import { Component, OnInit } from '@angular/core';
import {HeroService} from "../hero.service";

interface IHero {
  index: number;
  name: string;
  hobby : string
}
@Component({
  selector: 'app-injection',
  templateUrl: './injection.component.html',
  styleUrls: ['./injection.component.css']
})
export class InjectionComponent implements OnInit {
  heroesList : IHero[] = []
  constructor(private heroService : HeroService) { }

  ngOnInit(): void {
    this.heroesList = this.heroService.getAllHeroes()
    console.log(this.heroesList)
  }

}
