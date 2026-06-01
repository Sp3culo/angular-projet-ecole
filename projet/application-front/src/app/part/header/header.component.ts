import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  viewProfil : boolean = false;
  modalTitle : string = "Mon profil";

  constructor(private router: Router, public authService: AuthService, public userService: UserService) {
  }

  ngOnInit(): void {
  }

  goToSignIn() {
    this.router.navigate(['/sign-in']);
  }

  goToSignUp() {
    this.router.navigate(['/sign-up']);
  }

  goToAdmin() {
    this.router.navigate(['/admin']);
  }

  handleDelete() {
    this.userService.deleteAccount().subscribe(response => {
      if (response.code === 200) {
        this.handleLogout()
      }
    })
  }

  handleLogout() {
    this.authService.logout()
    this.router.navigate(['/']);
  }

  viewAccount() {
    this.modalTitle = "Mon profil"
    this.viewProfil = true;
  }

  closeAccount() {
    this.modalTitle = ""
    this.viewProfil = false;
  }
}
