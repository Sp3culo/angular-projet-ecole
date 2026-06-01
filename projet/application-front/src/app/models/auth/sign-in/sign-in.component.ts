import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {IUserAuth} from "../../../../../../shared";

interface ISignInResponse {
  code: number
  message: string
  user : IUserAuth;
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  reactiveSignInForm = this.fb.group({
    username: ["", [Validators.required, Validators.minLength(5)]],
    password: ["", [Validators.required, Validators.minLength(6)]],
  })

  username: string | null | undefined = "";
  password: string | null | undefined = "";

  loader: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  handleSubmit() {
    this.loader = true;

    this.username = this.reactiveSignInForm.value.username;
    this.password = this.reactiveSignInForm.value.password;

    this.authService.login({...this.reactiveSignInForm.value}).subscribe((result: ISignInResponse )=> {

      if(result?.code === 200) {
        sessionStorage.setItem('token', result.user.access_token);
        sessionStorage.setItem('id', result.user.id.toString());
        sessionStorage.setItem('username', result.user.username);
        sessionStorage.setItem('admin', result.user.admin ? "true" : "false");
        sessionStorage.setItem('score', result.user.score.toString());
      }
    });

    this.authService.isAuth();
    this.authService.isAdmin();

    this.reactiveSignInForm.reset();
    this.loader = false;
    this.router.navigate(['/'])
  }
}
