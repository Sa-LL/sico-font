import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss'],
})
export class LoginLayoutComponent implements OnInit {
  formValue!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  initializeForm(): void {
    this.formValue = this.formBuilder.group({
      cedula: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
