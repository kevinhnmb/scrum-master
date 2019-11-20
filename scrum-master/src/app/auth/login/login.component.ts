import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

import { FormBuilder, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    authError: any;

    myForm: FormGroup;

    constructor(private auth: AuthService, private fb: FormBuilder, private router: Router) { 
    }

    ngOnInit() {
        this.auth.eventAuthError$.subscribe( data => {
            this.authError = data;
        })

        /**this.auth.getUserState().subscribe(user => {
            console.log(user);
        })**/

        this.myForm = this.fb.group({
            email: '',
            password: ''
        })

        //this.myForm.valueChanges.subscribe(console.log)
    }

    login(frm) {
        console.log("Called!");
        console.log(frm.value.email);
        console.log(frm.value.password);

        this.auth.login(frm.value.email, frm.value.password);
    }

    register() {
        this.router.navigateByUrl('/registration');
    }

}
