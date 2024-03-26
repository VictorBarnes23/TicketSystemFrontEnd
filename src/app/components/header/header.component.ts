import { GoogleSigninButtonModule, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,GoogleSigninButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  user: SocialUser = {} as SocialUser;
  loggedIn: boolean = false;


  constructor(private socialAuthServiceConfig: SocialAuthService) { }
 
  ngOnInit() { 
    //authState is a custom observable that will run again any time changes are noticed.
    this.socialAuthServiceConfig.authState.subscribe((userResponse: SocialUser) => {
      this.user = userResponse;
      //if login fails, it will return null.
      this.loggedIn = (userResponse != null);
    });
  }
  //login component doesn't account for logging out.
  signOut(): void {
    this.socialAuthServiceConfig.signOut();
  }
}
