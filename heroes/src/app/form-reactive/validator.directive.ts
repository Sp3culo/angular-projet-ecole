import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn
} from "@angular/forms";

export function ValidatorDirective(regex: RegExp) : ValidatorFn {
  return (control: AbstractControl): 	ValidationErrors | null => {

    if (!control.value) {
      return null;
    }
    const forbidden = regex.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}
