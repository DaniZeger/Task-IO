import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements AfterViewInit {
  logInForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email]
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)]
    })
  })

  @ViewChild('emailFieldRef') emailField!: ElementRef

  ngAfterViewInit(): void {
    this.emailField.nativeElement.focus()
  }

  getFieldControl(field: string): FormControl {
    return this.logInForm.get(field) as FormControl
  }

  onSubmit() {
    if (this.logInForm.invalid) {
      return;
    }

    console.log(this.logInForm.value);

  }
}
