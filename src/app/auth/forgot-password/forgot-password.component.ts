import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-forgot-password',
  imports: [
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    RouterLink,
    ReactiveFormsModule,
    MatIcon
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  private _router = inject(Router);

  email = new FormControl('', [Validators.required, Validators.email]);

  resetPassword() {
    this._router.navigateByUrl('/auth/password-reset');
  }
}