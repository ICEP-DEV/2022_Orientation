import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//---------------------------------------------------------------------------Student Components
//Dashboard
import { CampusComponent } from './campus/campus.component';
//Auth
import { RegisterComponent } from './student/register/register.component';
import { SignInComponent } from './student/sign-in/sign-in.component';
import { ForgottenComponent } from './student/forgotten/forgotten.component';
//Other
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
//---------------------------------------------------------------------------Administration Components
//Administration Components
//Dashboard
import { DashboardComponent } from './admin/dashboard/dashboard.component';
//Auth
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
//Other
import { UpdateComponent } from './admin/update/update.component';
import { SurveyResponsesComponent} from './admin/survey-responses/survey-responses.component';





const routes: Routes = [
  
  { path: '', component: CampusComponent},
  { path: 'home', component: HomeComponent },
  { path: '', component: HeaderComponent,
    children: [
      //Student Directories
      
      { path: 'welcome', component: WelcomeComponent},
      { path: 'blog', component: BlogComponent},
      //Student Auth
      { path: 'student-reg', component: RegisterComponent},
      { path: 'student-login', component: SignInComponent},     
      { path: 'forgotten', component: ForgottenComponent},  
    ]
  },
  //Admin Directories
  { path: 'dashboard', component: DashboardComponent},
  { path: 'update', component: UpdateComponent},
  { path: 'survey-data', component: SurveyResponsesComponent},
  //Admin Auth
  { path: 'admin-login', component: AdminLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
