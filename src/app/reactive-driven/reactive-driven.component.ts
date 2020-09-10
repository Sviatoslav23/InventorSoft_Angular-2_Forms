import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormControl, ValidationErrors, FormBuilder, Validators, FormArray } from '@angular/forms'

@Component({
  selector: 'app-reactive-driven',
  templateUrl: './reactive-driven.component.html',
  styleUrls: ['./reactive-driven.component.scss']
})
export class ReactiveDrivenComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }
  //FormGroup
  // reactiveForm = new FormGroup({
  //   name: new FormControl('', Validators.minLength(3)),
  //   password: new FormControl('', Validators.required)
  // });

  //FormBuilder
  reactiveForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    password: ['', [Validators.required, this.checkPassword]],

    //email to FormArray
    emails: this.fb.array([
      this.fb.control('')
    ])
  });
  //getter name
  get name() {
    return this.reactiveForm.get('name');
  }
  //getter password
  get pwd() {
    return this.reactiveForm.get('password');
  }

  //email 
  get email() {
    return this.reactiveForm.get('emails') as FormArray;
  }

  addEmail() {
    this.email.push(this.fb.control(''));
  }
  deleteEmail(i) {
    if (this.email.length > 1) {
      this.email.removeAt(i);
    } else {
      this.email.reset();
    }
  }

  //update to default data
  updateData() {
    this.reactiveForm.patchValue({
      name: 'Petro',
      password: 'Lol12345'
    });
  }

  //submit
  onSubmit() {
    window.alert('Reactive Form was submitted!');
    this.reactiveForm.reset();
    console.warn(this.reactiveForm.value);
  }

  //Custom Validator
  checkPassword(control: AbstractControl): ValidationErrors | null {

    let errors: any = {};
    let value: string = control.value || '';

    if (!value) {
      return null;
    }
    if (/[A-Z]+/g.test(value) === false) {
      errors.capitalLetters = "Enter at least 1 capital letter";
    }
    if (/[a-z]+/g.test(value) === false) {
      errors.lowCaseLetters = "Enter at least 1 low case letter";
    }
    if (/[0-9]+/g.test(value) === false) {
      errors.digits = "Enter at least 1 digit";
    }
    return errors;

  }
}
