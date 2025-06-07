import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {KENDO_INPUTS} from '@progress/kendo-angular-inputs'
import {KENDO_LABELS} from '@progress/kendo-angular-label'
import { KENDO_CHECKBOX } from '@progress/kendo-angular-inputs';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { UserAuthenticatorService } from '../../../Services/user-authenticator.service';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../../../Interfaces/common-interfaces'
import { KENDO_INDICATORS,LoaderType,LoaderThemeColor,LoaderSize,} from "@progress/kendo-angular-indicators";

@Component({
  selector: 'app-login-view',
  standalone: true,
  imports: [RouterOutlet, KENDO_INPUTS, KENDO_LABELS, KENDO_CHECKBOX, KENDO_BUTTONS, ReactiveFormsModule, KENDO_INDICATORS],
  templateUrl: './login-view.component.html',
  styleUrl: './login-view.component.scss'
})

export class LoginViewComponent {
  public loaderType : LoaderType = <LoaderType>"pulsing";
  public loaderSize: LoaderSize = <LoaderSize>"medium";

  showLoader = false;
  showMessage = false;
  Message = '';
  loginForm: FormGroup;
  
  constructor(private fb: FormBuilder, private router: Router, private authService: UserAuthenticatorService) {

    this.loginForm = this.fb.group(
      {
        userName : new FormControl('', Validators.required),
        password : new FormControl('', Validators.required),
        isRememberMeSelected : new FormControl(false)
      }
     )
   }

  onLogin()
  {
    this.showLoader = true;
    this.showMessage = false;
    let user = this.loginForm.value.userName;
    let pwd = this.loginForm.value.password;

    let userData = this.authService.getUserData(user, pwd);

    if (userData != null) {
      this.authService.setCurrentUser(userData);
      this.showLoader = false;
      this.router.navigate(['/home']);
    }
    else {
      if (this.loginForm.valid)
      {
        this.Message = "Invalid UserName or Password";
      }
      else
      {
        this.Message = "UserName and Password fields are mandatory";
      }
      this.showLoader = false;
      this.showMessage = true;
    }
  }
}
