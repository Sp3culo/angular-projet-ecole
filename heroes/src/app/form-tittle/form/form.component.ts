import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  superhero ?: string;
  // @ViewChild('superheroForm') superheroForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(form: NgForm) : void {
    this.superhero = form.value.superhero;
  }
}
