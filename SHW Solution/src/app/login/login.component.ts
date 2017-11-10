import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './../provider/auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    constructor(public fb: FormBuilder, public router: Router, private authService: AuthService) {
        this.createForm();
    }
    ngOnInit() {
    }

    createForm() {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.minLength(6)]],
            password: ['', Validators.required]
        })
    }
    onLoggedin() {
        console.log(this.loginForm.value);
        this.authService.logIn(this.loginForm.value)
        .map(
       data=>{console.log(data); return data },
       err =>{console.log(err); return err}
       ).subscribe(
           data=>{
            console.log(data);
            if(data.type==="admin"){
             this.router.navigate(['dashboard']);
            localStorage.setItem('currentUser',JSON.stringify(data));
            localStorage.setItem('isLoggedin', 'true');
            }
        },
           err=>{alert("Email & Password Invalid");console.log(err)}
        );
        // this.router.navigate(['dashboard'])
        // localStorage.setItem('isLoggedin', 'true');
    }

}
