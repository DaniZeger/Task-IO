import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/app.component';
import { ApiService } from 'src/app/core/api.service';
import { LoggerService } from 'src/app/core/logger.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements AfterViewInit {
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

  constructor(
    private logger: LoggerService,
    private api: ApiService,
    private router: Router,
  ) { }

  @ViewChild('nameFieldRef') nameField!: ElementRef

  ngAfterViewInit(): void {
    this.logger.log('this is "ngAfterViewInit"')
    this.nameField.nativeElement.focus()
  }


  getFieldControl(field: string): FormControl {
    return this.signUpForm.get(field) as FormControl
  }

  onSubmit() {
    if (this.signUpForm.invalid) {
      return;
    }

    console.log(this.signUpForm.value);
    this.api.signUp(this.signUpForm.value).subscribe({
      next: (data: User) => {
        this.router.navigate(['login'])
      },
      error: (err) => this.logger.error(err)
    })

  }
}
