import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

const numberPattern = /^[0-9]+$/;
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  private fb = inject(FormBuilder);
  private dataService = inject(DataService);

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(8)]],
    cardNumber: ['', [Validators.required, Validators.pattern('^.{16}$')]],
    month: ['', [Validators.required, Validators.minLength(1)]],
    year: ['', [Validators.required, Validators.pattern('^.{2}$')]],
    cvc: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^.{3}$')]],
  });

  submit() {

    // console.log(this.myForm.controls['cardNumber'].errors!['pattern']['requiredPattern']);

    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    this.myForm.controls['cardNumber'].setValue(this.myForm.controls['cardNumber'].value.toString());
    this.dataService.onSubmit(this.myForm.valid);
    this.dataService.setForm(this.myForm);
  }

  getFieldError(field: string): string | null {

    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch(key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Minimo ${errors['minlength'].requiredLength} letras`;
      }
    }

    return null;
  }
}
