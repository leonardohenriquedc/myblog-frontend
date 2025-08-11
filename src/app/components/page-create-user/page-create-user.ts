import { Component, OnInit } from '@angular/core';
import { Globalheader } from '../globalheader/globalheader';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminFunctions } from '../../services/admin-service/admin-funcions/admin-functions';
import { AuthLogin } from '../models/auth-login';

@Component({
  selector: 'app-page-create-user',
  standalone: true,
  imports: [Globalheader, ReactiveFormsModule],
  templateUrl: './page-create-user.html',
  styleUrl: './page-create-user.css'
})
export class PageCreateUser implements OnInit {

  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private adminFunctions: AdminFunctions) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.adminFunctions.createUser(new AuthLogin(
      0,
      this.formGroup.get('name')?.value,
      this.formGroup.get('email')?.value,
      this.formGroup.get('password')?.value
    ));
  }
}
