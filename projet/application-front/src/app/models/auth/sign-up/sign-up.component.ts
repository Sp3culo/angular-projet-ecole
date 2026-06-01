import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  reactiveSignUpForm = this.fb.group({
    username: ["", [Validators.required, Validators.minLength(5)]],
    password: ["", [Validators.required, Validators.minLength(6)]],
    birthdate: ["", [Validators.required]],
  })

  username: string | null | undefined = "";
  password: string | null | undefined = "";
  birthdate: string | null | undefined = "";

  loader = false;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
  }

  handleSubmit() {
    this.loader = true;

    this.username = this.reactiveSignUpForm.value.username;
    this.password = this.reactiveSignUpForm.value.password;
    this.birthdate = this.reactiveSignUpForm.value.birthdate;

    this.userService.signIn({ ...this.reactiveSignUpForm.value}).subscribe(result => {
      console.log(result)
    })

    this.reactiveSignUpForm.reset();

    this.loader = false;
  }
}
