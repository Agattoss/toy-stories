/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'toy-stories-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent {
  constructor() {}
readonly registrationForm: FormGroup = new FormGroup({
  firstname: new FormControl(),
  lastname: new FormControl(),
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl(),
  phone: new FormControl(),
  street: new FormControl(),
  number: new FormControl(),
  zipcode: new FormControl(),
  city: new FormControl(),

})

}



