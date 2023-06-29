import { Injectable, computed, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private fb = inject(FormBuilder);

  private isOk = signal<boolean>(false);
  public isOkComputed = computed(() => this.isOk());

  public myForm: FormGroup = this.fb.group({
    name: ['jane appleseed', [Validators.required, Validators.minLength(8)]],
    cardNumber: ['0000000000000000', [Validators.required, Validators.pattern('^.{16}$')]],
    month: ['00', [Validators.required, Validators.minLength(1)]],
    year: ['00', [Validators.required, Validators.pattern('^.{4}$')]],
    cvc: ['000', [Validators.required, Validators.minLength(3), Validators.pattern('^.{3}$')]],
  });

  constructor() { }

  onSubmit(data: boolean) {
    this.isOk.set(data);
  }

  setForm(form: FormGroup) {
    this.myForm.setValue(form.value);
  }
}
