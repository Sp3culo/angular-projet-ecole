import { Component, OnInit } from '@angular/core';
import * as stream from "stream";

interface IHero {
  index: number;
  name: string;
  hobby : string
}

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})

export class HeroesListComponent implements OnInit {
  tittle ?: string;
  heroes : Array<IHero> = []
  constructor() { }

  ngOnInit(): void {
    setTimeout( () => this.tittle = "List of my Super Heroes 🦹🏻", 1000)

    this.heroes = [
      {index : 0, name:"Superman", hobby: "Read"},
      {index : 1, name : "Batman", hobby: "Craft"},
      {index : 2, name : "Spiderman", hobby: "knit"}
    ]
  }

}
