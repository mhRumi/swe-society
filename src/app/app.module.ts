import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  //{path: '/', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: AuthenticationComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'blog', component: BlogComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AuthenticationComponent,
    RegisterComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
