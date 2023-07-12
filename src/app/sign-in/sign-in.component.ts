import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../shared/services/auth.service';
import { User } from '../shared/models/user.model';
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
} from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  user!: User;
  avatar: string = '';
  email: string = '';
  fullName: string = '';
  constructor(
    private readonly authService: AuthService,
    private fireAuth: AngularFireAuth
  ) {}
  signInWithGoogle() {
    this.fireAuth
      .signInWithPopup(new GoogleAuthProvider())
      .then((data: any) => {
        this.avatar = data.user._delegate.photoURL;
        this.email = data.user._delegate.email;
        this.fullName = data.user._delegate.displayName;
        // this.setUser(
        //   data.user._delegate.photoURL,
        //   data.user._delegate.email,
        //   data.user._delegate.displayName
        // );
      })
      .catch((error) => {
        console.log(`🚀 ~ this.fireAuth.signInWithPopup ~ error:`, error);
      });
  }

  signInWithFacebook() {
    // this.authService.signInByFacebook();
    // URL Sign In Facebook
    // https://www.youtube.com/watch?v=2TxirN6aI_s
    this.fireAuth
      .signInWithPopup(new FacebookAuthProvider())
      .then((data) => {
        console.log(`🚀 ~ this.fireAuth.signInWithPopup ~ data:`, data);
      })
      .catch((error) => {
        console.log(`🚀 ~ this.fireAuth.signInWithPopup ~ error:`, error);
      });
  }

  setUser(avatar: string, email: string, fullName: string) {
    this.user.avatar = avatar;
    this.user.email = email;
    this.user.fullName = fullName;
    console.log('this.user', this.user);
  }
}
