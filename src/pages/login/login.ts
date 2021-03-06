import { Component, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import * as firebase from '@firebase/app';
import { User } from '../../providers';
import { WelcomePage } from '../';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [FirebaseAuthentication]
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: 'test@example.com',
    password: 'test'
  };

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService, private firebaseAuthentication: FirebaseAuthentication) {
    //  public translateService: TranslateService){
    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  // Attempt to login in through our User service
  doLogin() {
    console.log(this.account.email)
    /*
    this.user.login(this.account).subscribe((resp) => {
      this.navCtrl.push(MainPage);
    }, (err) => {
      //this.navCtrl.push(MainPage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
    */
   /*
   firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
    return firebase.auth().signInWithEmailAndPassword(this.account.email, this.account.password)
      .then((user) => {
        $('#myModal').modal('toggle');
        this.user = user.user;
      })
      .catch((error) => {
        alert(error.message);
      });
  });
  */
 
 this.firebaseAuthentication.signInWithEmailAndPassword(this.account.email, this.account.password)
  .then((res: any) => console.log(res))
  .catch((error: any) => console.error(error));
  
  console.log('latest version 5')
   
  }
}
