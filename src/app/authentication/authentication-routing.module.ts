import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

const routes: Routes = [{ path: '', component : AuthenticationComponent},
  {
    path: 'login',
    component: LoginpageComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
