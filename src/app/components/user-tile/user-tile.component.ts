import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { UserModel } from '../../models/user-model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-tile',
  templateUrl: './user-tile.component.html',
  styleUrls: ['./user-tile.component.css']
})
export class UserTileComponent implements OnInit {

  users: UserModel[];

  constructor(private userService: UserService, private router: Router) {
    userService.getAllUsers().subscribe(user => {
      this.users = user;
    })
  }

  createUser(): void {
    this.router.navigateByUrl('create');
  }

  goToDetails(id: number): void {
    this.router.navigateByUrl('/details/' + id);
  }

  deleteUser(user: UserModel): void {
    this.userService.deleteUserById(user.id).subscribe(() => {
      this.users = this.users.filter(function (users) {
        return users.id != user.id;
      });
      console.log('user deleted');
    }, error => {
      throwError(error);
    });
  }

  goToUpdate(id: number): void {
    this.router.navigateByUrl('/update/' + id);
  }

  ngOnInit(): void {
  }

}
