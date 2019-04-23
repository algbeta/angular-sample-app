import { Component, OnInit, Input, Self, Optional } from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
  ValidatorFn,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent implements OnInit, ControlValueAccessor {
  @Input() disabled: boolean;
  @Input() label: string;

  value: any = '';

  constructor(
    @Self()
    @Optional()
    private ngControl: NgControl
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {}

  writeValue(value: any): void {
    this.value = value;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  private onChange() {}
  private onTouched() {}
}

export function dateFormatValidator(): ValidatorFn {
  return (formControl: FormControl) => {
    const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;

    return dateRegex.test(formControl.value)
      ? null
      : {
          invalidDate: true
        };
  };
}
