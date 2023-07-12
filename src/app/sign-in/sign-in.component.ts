import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor(private readonly authService: AuthService) {}
  signInWithGoogle() {
    this.authService.signIn('a@gmail.com', '123456');
  }
}
