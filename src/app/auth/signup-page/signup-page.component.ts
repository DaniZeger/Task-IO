import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {
  // ? FormsModule validations example
  // nameField = ""

  // formValid(): boolean {
  //   return (this.nameField.length >= 2)
  // }
  ////////////////////////////////////////////////////////////

  // ? ReactiveFormsModule validations example

  signUpForm = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.maxLength(20)]
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email]
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)]
    })
  })

  getFieldControl(field: string): FormControl {
    return this.signUpForm.get(field) as FormControl
  }

  onSubmit() {
    if (this.signUpForm.invalid) {
      return;
    }

    console.log(this.signUpForm.value);

  }
}
