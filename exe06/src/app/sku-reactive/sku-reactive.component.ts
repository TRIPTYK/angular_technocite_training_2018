import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  AbstractControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-sku-reactive',
  templateUrl: './sku-reactive.component.html',
  styleUrls: ['./sku-reactive.component.css']
})
export class SkuReactiveComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;
  email: AbstractControl;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      sku: ['ABC', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
    this.sku = this.myForm.controls['sku'];
    this.email = this.myForm.controls['email'];
  }
  onSubmit(form: any) {
    console.log(this.email.hasError('email'));
    console.log(this.myForm.valid);
    console.log(form);
  }
  ngOnInit() {}
}
