import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialsModules } from '../MaterialModules/materials';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { LoginpageComponent } from './loginpage/loginpage.component';


@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginpageComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    MaterialsModules
  ]
})
export class AuthenticationModule { }
