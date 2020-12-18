import { Injectable, NgZone } from '@angular/core';
import { Router } from  "@angular/router";
import  firebase  from  'firebase/app';
import "@firebase/auth";
import { AngularFireAuth } from  "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from  './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: User;
  constructor(
    public afAuth:  AngularFireAuth,
    public router:  Router,
    public afs: AngularFirestore,
    public ngZone: NgZone
  ) {
    this.afAuth.authState.subscribe(user => {
    if (user){
      this.router.navigate(['dashboard']);
      this.userData = user;
      localStorage.setItem('user', JSON.stringify(this.userData));
      localStorage.setItem('userid', JSON.stringify(this.userData.uid));
      JSON.parse(localStorage.getItem('user'));
    } else {
      localStorage.setItem('user', null);
      localStorage.setItem('userid', null);
      JSON.parse(localStorage.getItem('user'));
      localStorage.removeItem('user');
      localStorage.removeItem('userid');
    }
  })
}
  SignIn(email, password){
    // this.router.navigate(['dashboard']);
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result)=>{
      this.ngZone.run(()=>{
        this.router.navigate(['dashboard']);
        location.reload();
      });
      this.SetUserData(result.user);
      // this.router.navigate(['dashboard']);
    }).catch((error)=>{
      window.alert(error.message)
    })

  }

  SignUp(email, password){
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result)=>{
      this.SendVerificationMail();
      this.SetUserData(result.user);
    }).catch((error)=>{
      window.alert(error.message)
    })
  }

  SendVerificationMail(){
    return firebase.auth().currentUser.sendEmailVerification()
    .then(()=>{
      this.router.navigate(['verify-email-address']);
    })
  }

  get isLLoggedIn(): boolean{
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerifies !== false) ? true : false;
  }

  SetUserData(user){
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  SignOut(){
    return firebase.auth().signOut().then(()=>{
      localStorage.removeItem('user');
      localStorage.removeItem('userid');
      this.router.navigate(['login']);
    })
  }

}
