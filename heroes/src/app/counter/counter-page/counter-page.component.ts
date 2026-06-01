import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent implements OnInit {
  counter: number;
  clickable = false;
  constructor() {
    this.counter = 0
  }

  ngOnInit(): void {
  }

  handleClickIncrement () : void {
    this.counter += 1

    if (this.counter >= 1 && !this.clickable) {
      this.clickable = true
    }
  }

  handleClickDecrement () : void {
    this.counter -= 1

    if (this.counter == 0 && this.clickable) {
      this.clickable = false
    }
  }

}
