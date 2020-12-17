import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { P404Component } from './p404/p404.component';
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
import { SepServeService } from './month/sep/sep-serve.service';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path:'',
    component: HomepageComponent,
    pathMatch: 'full'
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'login',
    component: LoginComponent,
    // canActivate: [AuthGuard]
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path:'signup',
    component: SignupComponent,
    // canActivate: [AuthGuard]
  },
  {
    path:'verify-email-address',
    component: VerifyemailComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent,
    // canActivate: [AuthGuard]
  },
  {
    path:'january',
    component: JanuaryComponent
  },
  {
    path:'february',
    component: FebruaryComponent
  },
  {
    path:'march',
    component: MarchComponent
  },
  {
    path:'april',
    component: AprilComponent
  },
  {
    path:'may',
    component: MayComponent
  },
  {
    path:'june',
    component: JuneComponent
  },
  {
    path:'july',
    component: JulyComponent
  },
  {
    path:'august',
    component: AugustComponent
  },
  {
    path:'september',
    component: SeptemberComponent
  },
  {
    path:'october',
    component: OctoberComponent
  },
  {
    path:'november',
    component: NovemberComponent
  },
  {
    path:'december',
    component: DecemberComponent
  },
  {
    path:'**',
    component: P404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
