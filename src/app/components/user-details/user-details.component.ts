import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { UserModel } from 'src/app/models/user-model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userId: number;
  user: UserModel;
  isLoaded: boolean = false;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { 
    this.userId = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getUserById();
  }

  getUserById(){
    this.userService.getUserById(this.userId).subscribe(user => {
      this.user = user;
      this.isLoaded = true;
    }, error => {
      throwError(error);
    });
  }

}
