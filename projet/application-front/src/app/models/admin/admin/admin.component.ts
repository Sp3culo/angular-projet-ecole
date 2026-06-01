import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../../services/admin.service";
import {UserService} from "../../../services/user.service";

interface IUser {
  admin: boolean;
  birthdate: string;
  id: number;
  score: number;
  username: string;
}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  users: IUser[] = [];

  constructor(private adminService: AdminService, private userService : UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.adminService.getAllUsers().subscribe(results => {
      this.users = results.reponse
    });
  }

  handleDelete(id: number) {
    this.userService.deleteAccountById(id).subscribe(response => {
      this.getUsers();
    })
  }

  handleAmin(id: number) {
    this.userService.updateAdminByUserId(id).subscribe(response => {
      this.getUsers();
    })
  }
}
