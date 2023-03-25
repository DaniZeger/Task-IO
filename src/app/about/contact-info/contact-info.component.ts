import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent {
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
