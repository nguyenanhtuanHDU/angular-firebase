import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireAuth: AngularFireAuth) {}

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
}
