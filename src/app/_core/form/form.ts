import { FormBuilder, FormGroup, FormArray, AbstractControlOptions } from '@angular/forms';
import { Observable } from 'rxjs';

export interface FormGroupT<T> extends FormGroup {
  value: T;
  valueChanges: Observable<T>;
}

export interface FormArrayT<T> extends FormArray {
  value: T;
  valueChanges: Observable<T>;
}

export function formCreate<T>(
  fb: FormBuilder,
  formObject: { [K in keyof T]: T[K] extends FormArray ? T[K] : [T[K], any?, any?]; },
  options?: AbstractControlOptions | { [key: string]: any; },
): FormGroupT<T> {
  return fb.group(formObject, options);
}

export function formPatchValue<T>(
  form: FormGroupT<T>,
  formObject: Partial<T>,
  options: { onlySelf?: boolean; emitEvent?: boolean; } = {}
): void {
  form.patchValue(formObject, options);
}

export function formSetValue<T>(
  form: FormGroupT<T>,
  formObject: T,
  options: { onlySelf?: boolean; emitEvent?: boolean; } = {}
): void {
  form.setValue(formObject, options);
}
