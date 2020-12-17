import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ArticleComponent } from './article/article.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { P404Component } from './p404/p404.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ContactComponent } from './contact/contact.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AuthService } from "./auth/auth.service";
import { SignupComponent } from './signup/signup.component';
import { VerifyemailComponent } from './verifyemail/verifyemail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JanuaryComponent } from './january/january.component';
import { FebruaryComponent } from './february/february.component';
import { MarchComponent } from './march/march.component';
import { AprilComponent } from './april/april.component';
import { MayComponent } from './may/may.component';
import { JuneComponent } from './june/june.component';
import { JulyComponent } from './july/july.component';
import { AugustComponent } from './august/august.component';
import { SeptemberComponent } from './september/september.component';
import { OctoberComponent } from './october/october.component';
import { NovemberComponent } from './november/november.component';
import { DecemberComponent } from './december/december.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

var firebaseConfig = {
      apiKey: "AIzaSyDl-Xb3iIjsKz4LJdOnRnsX-dP6tmQokPc",
      authDomain: "personal-budget-dc0a6.firebaseapp.com",
      projectId: "personal-budget-dc0a6",
      storageBucket: "personal-budget-dc0a6.appspot.com",
      messagingSenderId: "537773871725",
      appId: "1:537773871725:web:a08d1f6b1572199e7c6564",
      measurementId: "G-N50RPWK7TG"
    };

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeroComponent,
    FooterComponent,
    HomepageComponent,
    ArticleComponent,
    AboutComponent,
    LoginComponent,
    P404Component,
    BreadcrumbsComponent,
    ContactComponent,
    SignupComponent,
    VerifyemailComponent,
    DashboardComponent,
    JanuaryComponent,
    FebruaryComponent,
    MarchComponent,
    AprilComponent,
    MayComponent,
    JuneComponent,
    JulyComponent,
    AugustComponent,
    SeptemberComponent,
    OctoberComponent,
    NovemberComponent,
    DecemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    CommonModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
