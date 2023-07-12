import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireAuth: AngularFireAuth, private router: Router) {}

  signIn(email: string, password: string) {
    this.fireAuth
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        console.log('login success');

        console.log(
          `🚀 ~ this.fireAuth.signInWithEmailAndPassword ~ data:`,
          data
        );
      })
      .catch((error) => {
        console.log('login failed');

        console.log(
          `🚀 ~ this.fireAuth.signInWithEmailAndPassword ~ error:`,
          error
        );
      });
  }

  signInByGoogle() {
    this.fireAuth
      .signInWithPopup(new GoogleAuthProvider())
      .then((data) => {
        console.log(`🚀 ~ .then ~ data:`, data);

        return data;
      })
      .catch((error) => {
        console.log(`🚀 ~ this.fireAuth.signInWithPopup ~ error:`, error);
      });
  }

  signInByFacebook() {
    this.fireAuth
      .signInWithPopup(new FacebookAuthProvider())
      .then((data) => {
        console.log(`🚀 ~ this.fireAuth.signInWithPopup ~ data:`, data);
      })
      .catch((error) => {
        console.log(`🚀 ~ this.fireAuth.signInWithPopup ~ error:`, error);
      });
  }
}
