import { Injectable } from '@angular/core';
// import { AngularFireAuth } from 'angularfire2/auth';
// import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Http, HttpModule } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
// import * as firebase from 'firebase/app';
@Injectable()
export class AuthService {
  authState;
  checkUserType;
  constructor(private http: Http,
    public router: Router) {

    // this.afAuth.authState.subscribe((auth) => {
    //   this.authState = auth;
    //   console.log(this.authState);
    //   console.log("Auth Changes");

    // })
  }
  logout() {
    console.log("signout");
    // this.afAuth.auth.signOut();
    this.router.navigate(['']);
  }

  logIn(loginForm) {
    console.log("service")
    console.log(loginForm)
    var dataJSON=JSON.stringify(loginForm)
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8000/login', loginForm, options)
      .map(res => {
      console.log(res.json())
      if(res.json().type==="admin"){
        this.checkUserType=res.json().type;
        console.log(res.json().type);
      }
      return res.json() 
    })
      .catch((err)=>
    { console.log(err.json)
     return err.json()
    })
    //  .subscribe(
    //    data=>{console.log(data);},
    //    err =>{console.log(err);}
    //    )
    // return this.http.get('http://localhost:8000/getData')
    // .map(res => {
    //   console.log(res)
    //   return res.json() }
    //   )
    // .catch((err)=>
    // {
    //    console.log(err)
    //  return err.json()})
    // .subscribe(data=>console.log(data))
    // return this.afAuth.auth.signInWithEmailAndPassword(loginForm.email, loginForm.password)
    // .then((data) => { 
    //   console.log(data);
    //   return true; 
    //   // this.getUserProfile()
    //  })
    // .catch((error) => {console.log(error); return error.message;}) ;
  }


  signup(signupForm) {
    // return this.afAuth.auth.createUserWithEmailAndPassword(signupForm.userName, signupForm.password)
    //   .then((data) => {


    //     // this.userRegistration = this.db.object('/userRegistration/' + this.afAuth.auth.currentUser.uid);
    //     // this.userRegistration.set(signupForm).then(() => this.getUserProfile());
    //     // //this.router.navigate(['/dashboard']);
    //   })
    //   .catch(error => console.log("Error"));

  }

}
