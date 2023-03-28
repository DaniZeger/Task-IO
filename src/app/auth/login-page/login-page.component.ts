import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

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

  constructor(
    private api: ApiService,
    private router: Router
  ) { }

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
    this.api.logIn(this.logInForm.value).subscribe({
      next: (data) => {
        console.log(data);
        if (data.token) this.api.setToken(data.token)
        this.router.navigate(['home'])
      },
      error: (err) => console.log(err)
    })

  }
}
