import { Directive, forwardRef } from '@angular/core';
import {
  NG_VALIDATORS,
  FormControl,
  Validator,
  ValidationErrors
} from '@angular/forms';

@Directive({
  selector: '[onlyNumbers]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => OnlyNumbersValidatorDirective),
      multi: true
    }
  ]
})
export class OnlyNumbersValidatorDirective implements Validator {
  validate(formControl: FormControl): ValidationErrors {
    debugger;
    const numberRegex = /^\d+$/;
    const isValid = numberRegex.test(formControl.value);
    return isValid ? null : { invalidNumber: true };
  }
}
