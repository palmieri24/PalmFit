import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth/token.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { AuthService } from './auth/auth.service';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'edit-profile',
    component: EditProfileComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'services', component: ServicesComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    EditProfileComponent,
    FooterComponent,
    ServicesComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
