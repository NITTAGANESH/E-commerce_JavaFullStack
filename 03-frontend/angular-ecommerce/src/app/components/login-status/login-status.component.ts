import { Component, Inject, OnInit } from '@angular/core';
import { OKTA_AUTH, OktaAuthStateService } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent implements OnInit {

  isAuthenticated: boolean = false;
  userFullName: string = '';
  storage: Storage = sessionStorage;

  constructor(private oktaAuthService: OktaAuthStateService, @Inject(OKTA_AUTH) private oktaAuth: OktaAuth) { }

  ngOnInit(): void {
    // subscribe to authentication state changes
    this.oktaAuthService.authState$.subscribe(
      (result) => {
        this.isAuthenticated = result.isAuthenticated!;
        this.getUserDetails();
      }
    );
  }
  getUserDetails() {
    if (this.isAuthenticated) {
      // fetch the logged in user details(user's claim)
      // 
      // user full name ius exposed as property name
      this.oktaAuth.getUser().then(
        (res) => {
          this.userFullName = res.name as string;
          // retreive the users email from authentication response
          const theEmail = res.email;

          // now store the emil in browser storage
          this.storage.setItem('userEmail', JSON.stringify(theEmail));
        }
      );
    }

  }

  logOut() {
    // terminate the session with Okta and remove current tokens.
    this.oktaAuth.signOut();
  }

}
