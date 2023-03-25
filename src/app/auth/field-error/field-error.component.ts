import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-field-error',
  templateUrl: './field-error.component.html',
  styleUrls: ['./field-error.component.css']
})
export class FieldErrorComponent {

  @Input() formField?: FormControl<any>;

  fieldErr(): String {
    const control = this.formField;

    if (
      !control ||
      !control.errors ||
      !control.dirty ||
      !control.touched
    ) {
      return ''
    }

    if (control.getError('required')) {
      return 'This field is required'
    }

    const maxLengthErr = control.getError('maxlength')
    if (control.getError('maxlength')) {
      return `Name must be shorter then ${maxLengthErr.requiredLength}`
    }

    const minLengthErr = control.getError('minlength')
    if (control.getError('minlength')) {
      return `Name must be longer then ${minLengthErr.requiredLength}`
    }

    if (control.getError('email')) {
      return 'Email is not valid'
    }


    return ''
  }
}
