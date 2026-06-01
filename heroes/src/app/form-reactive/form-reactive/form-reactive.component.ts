import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ValidatorDirective} from "../validator.directive";

interface ISuperheroPet {
  type: string | null | undefined;
  name: string | null | undefined;
  color: string | null | undefined
}
@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})

export class FormReactiveComponent implements OnInit {
  reactiveSuperheroForm = this.fb.group({
    superheroName: ["", [Validators.required, Validators.minLength(4)]],
    superheroHobby: ["", [Validators.required, Validators.minLength(4)]],
    superheroPhone: ["", [Validators.required, ValidatorDirective(/^\+?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}/)]],
    superheroPet: this.fb.group({
      petType: ["", [Validators.required, Validators.minLength(3)]],
      petName: ["", [Validators.required, Validators.minLength(4)]],
      petColor: ["", [Validators.required, Validators.minLength(4)]],
      }),
    })

    superheroName: string | null | undefined = "";
    superheroHobby: string | null | undefined = "";
    superheroPet: ISuperheroPet = {
      type : "",
      name : "",
      color : ""
    }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  handleSubmit(): void {
      this.superheroName = this.reactiveSuperheroForm.value.superheroName;
      this.superheroHobby = this.reactiveSuperheroForm.value.superheroHobby;
      this.superheroPet.type = this.reactiveSuperheroForm.value.superheroPet?.petType;
      this.superheroPet.name = this.reactiveSuperheroForm.value.superheroPet?.petName;
      this.superheroPet.color = this.reactiveSuperheroForm.value.superheroPet?.petColor;

      console.log({...this.reactiveSuperheroForm.value})

      this.reactiveSuperheroForm.reset();
    }
}
