import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }
