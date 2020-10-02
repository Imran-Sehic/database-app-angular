import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { UserModel } from 'src/app/models/user-model';
import { UserService } from 'src/app/services/user.service';
import { UpdateUserPayload } from './update-user.payload';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  userId: number;
  user: UserModel;
  updateUserForm: FormGroup;
  updateUserPayload: UpdateUserPayload;
  updating: string;
  dataLoaded: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router) {
    this.userId = activatedRoute.snapshot.params.id;

    this.updateUserPayload = {
      id: this.userId,
      firstname: '',
      lastname: '',
      address: '',
      salary: null
    }
  }

  ngOnInit(): void {
    this.getUserById();
  }

  getUserById() {
    this.userService.getUserById(this.userId).subscribe(data => {
      this.user = data;
      this.updateUserForm = new FormGroup({
        firstname: new FormControl(this.user.firstname, Validators.required),
        lastname: new FormControl(this.user.lastname, Validators.required),
        address: new FormControl(this.user.address, Validators.required),
        salary: new FormControl(this.user.salary, Validators.required),
      });
      this.dataLoaded = true;
    }, error => {
      throwError(error);
    });
  }



  updateUser() {
    this.updateUserPayload.firstname = this.updateUserForm.get('firstname').value;
    this.updateUserPayload.lastname = this.updateUserForm.get('lastname').value;
    this.updateUserPayload.address = this.updateUserForm.get('address').value;
    this.updateUserPayload.salary = this.updateUserForm.get('salary').value;

    if (this.updateUserForm.get('firstname').valid && this.updateUserForm.get('lastname').valid
      && this.updateUserForm.get('address').valid && this.updateUserForm.get('salary')) {

      this.updating = "updating";

      this.userService.updateUser(this.updateUserPayload).subscribe(() => {
        this.router.navigateByUrl('');
      }, error => {
        throwError(error);
      });

    } else {
      this.updating = "no";
    }
  }

}
