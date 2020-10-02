import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { CreateUserPayload } from './create-user.payload';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  createUserPayload: CreateUserPayload;
  createUserForm: FormGroup;
  created: string;

  constructor(private userService: UserService, private router: Router) {
    this.createUserPayload = {
      firstname: '',
      lastname: '',
      address: '',
      salary: null
    }
  }

  ngOnInit(): void {
    this.createUserForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      salary: new FormControl(null, Validators.required),
    });
  }

  createUser() {
    this.createUserPayload.firstname = this.createUserForm.get('firstname').value;
    this.createUserPayload.lastname = this.createUserForm.get('lastname').value;
    this.createUserPayload.address = this.createUserForm.get('address').value;
    this.createUserPayload.salary = this.createUserForm.get('salary').value;

    if (this.createUserForm.get('firstname').valid && this.createUserForm.get('lastname').valid
      && this.createUserForm.get('address').valid && this.createUserForm.get('salary')) {

        this.created = "creating";

      this.userService.createUser(this.createUserPayload).subscribe(() => {
        this.router.navigateByUrl('');
      }, error => {
        throwError(error);
      });

    } else {
      this.created = "no";
    }
  }

}
