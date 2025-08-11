import { Component, OnInit } from '@angular/core';
import { AuthLogin } from '../models/auth-login';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Globalheader } from '../globalheader/globalheader';
import { AdminFunctions } from '../../services/admin-service/admin-funcions/admin-functions';

@Component({
  selector: 'app-page-login',
  standalone: true,
  imports: [Globalheader, ReactiveFormsModule],
  templateUrl: './page-login.html',
  styleUrl: './page-login.css'
})
export class PageLogin implements OnInit {
  authLogin!: AuthLogin;

  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private adminFunctions: AdminFunctions) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.authLogin = new AuthLogin(0, '', this.formGroup.get('email')?.value, this.formGroup.get('password')?.value);

    this.adminFunctions.toLogin(this.authLogin);
  }
}
